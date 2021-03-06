<?php
include("fonctions_php.php");
include("../parametres/parametresPhylo.php");

$jsprotovis="TRUE";

echo 'PARAMETRES<br/>';
echo 'taille minimum des branches (hors émergentes) :'.$phylo_min_nb_periods_covered.'<br/>';
echo 'taille maximum des branches émergentes :'.$phylo_recent_min_nb_periods_covered.'<br/>';

//connexion a la base de donnees

include("../parametre.php");
$ink=mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");

include("../include/header.php");



/////////// On regarde quel est la dernière période afin de pouvoir afficher les thématiques actives
$last_period_list=array();
$resultat=mysql_query("select last_period,last_period_string FROM partitions GROUP BY last_period") or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
        array_push($last_period_list,$ligne[last_period]);
        $period_string=$ligne[last_period_string];
}

$last_period=max($last_period_list);
$first_period=min($last_period_list);
$period_string=explode(' ',$period_string);
$dT=$period_string[1]-$period_string[0];// fenêtre temporelle utilisée pour le calcul des clusters
$time_steps=$last_period_list[1]-$last_period_list[0]; // pas de la fenêtre glissante


//// Occurrences de termes dans les clusters
$query="ALTER TABLE partitions ADD periodWithMaxScore varchar(50);";
mysql_query($query);// or die ("<b>Requête non exécutée (creation du champ occurrences_in_cluster dans la table concepts)</b>.");

//////////
/// creation de la table
$query="
CREATE TABLE IF NOT EXISTS `data` (
`cle` varchar(50) DEFAULT NULL,
`valeur` text DEFAULT NULL,
UNIQUE KEY `cle` (`cle`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
";
mysql_query($query);


        echo ' Calcul des branches actives<br/>';
        $query="select * FROM partitions WHERE nb_period_covered >=".$phylo_min_nb_periods_covered.
            " AND last_period>=".($last_period-2*$dT);
        echo $query;
        $json_data=query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps);
        $cle='branches_actives_'.$phylo_min_nb_periods_covered;
        $sql="INSERT INTO data (cle,valeur) VALUES ('".$cle."','$json_data') ON DUPLICATE KEY UPDATE cle='".$cle."',valeur='$json_data';";
        echo '<br/>'.$sql.'<br/>';
        mysql_query($sql) or die("<bInserts non effectués)</b>.");

        echo ' Calcul des branches émergente<br/>';
        $query="select * FROM partitions WHERE nb_period_covered > 1 AND nb_fields>2 AND nb_period_covered <=".$phylo_min_nb_periods_covered.
            " AND last_period>=".($last_period-2*$dT);
        $json_data=query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps);
        $cle='branches_emergentes_'.$phylo_recent_min_nb_periods_covered;
        $sql="INSERT INTO data (cle,valeur) VALUES ('".$cle."','$json_data') ON DUPLICATE KEY UPDATE cle='".$cle."',valeur='$json_data';";
        echo '<br/>'.$sql.'<br/>';
        mysql_query($sql) or die("<bInserts non effectués)</b>.");

        echo ' Calcul des branches en suspens<br/>';
        $query="select * FROM partitions WHERE nb_period_covered >=".$phylo_min_nb_periods_covered.
               " AND last_period<".($last_period-2*$dT);
        $json_data=query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps);
        $cle='branches_suspens_'.$phylo_min_nb_periods_covered;
        $sql="INSERT INTO data (cle,valeur) VALUES ('".$cle."','$json_data') ON DUPLICATE KEY UPDATE cle='".$cle."',valeur='$json_data';";
        echo '<br/>'.$sql.'<br/>';
        mysql_query($sql) or die("<bInserts non effectués)</b>.");


        echo ' Calcul des score pour les autres branches<br/>';
        $query="select * FROM partitions WHERE nb_period_covered >=2 AND nb_period_covered<".$phylo_min_nb_periods_covered;
        batchPartitionScore($query,$first_period,$last_period,$dT,$time_steps);

////////////////////////////////
///////Fonction locales /////////
////////////////////////////////
function query2streamgraphData($query,$first_period,$last_period,$dT,$time_steps){
// transforme un ensemble de données de partition d'une requête sur la table partition en un streamgraph par partition

$resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");


$year_String='var years = [';
for ($i=$first_period;$i<=$last_period;$i+=$time_steps){
    $year_String.=$i.', ';
}
$year_String=substr($year_String,0,-2).'];';
echo $year_String;
// ajout des var pour chaque branche
$streamgraphString=$year_String.'var dynamics= {';

while ($partition_resultat=mysql_fetch_array($resultat)){
    //infos sur la partition
    $id_partition=$partition_resultat[id_partition];
    $partition_label=$partition_resultat[label];
       if (strcmp(substr($partition_label,-1),',')==0){
            $lab=substr($partition_label,0,-1);
            }
    $streamgraphString.='"'.remove_popo(substr($partition_label,0,-1)).'":'.partition2JSON($id_partition,$first_period,$last_period,$dT,$time_steps);
    }
$streamgraphString=substr($streamgraphString,0,-1).'};';
return $streamgraphString;
}
/////////////////////////////////////////////
function partition2JSON($id_partition,$first_period,$last_period,$dT,$time_steps){
// transforme un ensemble de champs d'un partition en un JSon pour streagraph
// { activity: [ value1, ..., valueN]}
$partitionScore=0;
$periodWithMaxScore=0;
$JSON_string="{ activity: [";

// pour chaque période, pour chaque champ, on considère l'ensemble des auteurs associé à un
// champ. On fait alors la somme, pour tous les auteurs dont au moins un billet dépasse le seuil
// de pertinence, des scores des billets les plus pertinents pour chaque auteur. Cela donne
// l'épaisseur du fil thématique, proportionnelle au nombre d'acteurs concernés et à leur proximité sémantique
$seuil_pertinence=0.3;//overlap_size/cluster_size/log10(10+billet_size-overlap_size)
$penetration_thematique=0.4;//overlap_size/cluster_size

for ($i=$first_period;$i<=$last_period;$i+=$time_steps) {
    $period_string=($i-$dT).' '.$i;
    echo $period_string.'<br/>';
    $period_score=0;
    $sql="SELECT id_cluster,periode FROM cluster WHERE pseudo=$id_partition AND periode='".$period_string."' GROUP BY id_cluster";
    $resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des clusters d'une période pour une partition)</b>.");
    echo $sql.'<br/>';
    $count=0;
    while ($ligne=mysql_fetch_array($resultat)) {
        $commande_sql_pert = "SELECT id_billet,id_auteur,overlap_size,billet_size,cluster_size from biparti where cluster = '".$ligne[id_cluster]."' AND periode = '".$ligne[periode]."' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=".$seuil_pertinence." and overlap_size/cluster_size>".$penetration_thematique;
        echo $commande_sql_pert.'<br/>';
        $billet_list=mysql_query($commande_sql_pert) or die ("<b>Requête non exécutée (récupération des billets associés à un cluster)</b>.");
        $auteur_score=array(); //
        while ($billet=mysql_fetch_array($billet_list)) {
            $score=$billet[overlap_size]/$billet[cluster_size]/log10(10+$billet[billet_size]-$billet[overlap_size]);
            //echo $billet[id_auteur].'<br/>';
            if ($auteur_score[$billet[id_auteur]]!=null) {
                if ($score>$auteur_score[$billet[id_auteur]]) {
                    $auteur_score[$billet[id_auteur]]=$score;
                }
            }else {
                $auteur_score[$billet[id_auteur]]=$score;
                $count++;
            }
        }
        $period_score+=array_sum($auteur_score)/10;
    }
    echo $count.' billets<br/>';
    echo ' ------------------------<br/>';
    $JSON_string.=round($period_score,4).', ';
    if ($partitionScore<$period_score){
        $partitionScore=$period_score;
        $periodWithMaxScore=$period_string;
    }
}
$JSON_string=substr($JSON_string,0,-2);
$JSON_string.='] },';

$sqlScore="INSERT INTO partitions (id_partition,score,periodWithMaxScore) VALUES ('".$id_partition."','".$partitionScore."','".$periodWithMaxScore."') ON DUPLICATE KEY UPDATE id_partition='".$id_partition."',
score='".$partitionScore."', periodWithMaxScore='".$periodWithMaxScore."'";
echo $sqlScore;
mysql_query($sqlScore) or die ("<b>Insert of total_number_of_cluster failed</b>.");;

return $JSON_string;
}

function batchPartitionScore($query,$first_period,$last_period,$dT,$time_steps) {
// calcul les scores pour un ensemble de données de partition d'une requête sur la table partition
    echo 'calul des score sur petites branches<br/>';
    echo $query.'<br/>';
    $resultat=mysql_query($query) or die ("<b>Requête non exécutée (récupération des principales thématiques)</b>.");
    while ($partition_resultat=mysql_fetch_array($resultat)) {
        //infos sur la partition
        $id_partition=$partition_resultat[id_partition];
        $partition_label=$partition_resultat[label];
        partitionScore($id_partition,$first_period,$last_period,$dT,$time_steps);
    }
}


////////////////
function partitionScore($id_partition,$first_period,$last_period,$dT,$time_steps){
// calcul le score d'une partition
$partitionScore=0;
$periodWithMaxScore=0;
echo 'id part '.$id_partition.'<br/>';

// pour chaque période, pour chaque champ, on considère l'ensemble des auteurs associé à un
// champ. On fait alors la somme, pour tous les auteurs dont au moins un billet dépasse le seuil
// de pertinence, des scores des billets les plus pertinents pour chaque auteur. Cela donne
// l'épaisseur du fil thématique, proportionnelle au nombre d'acteurs concernés et à leur proximité sémantique
$seuil_pertinence=0.3;//overlap_size/cluster_size/log10(10+billet_size-overlap_size)
$penetration_thematique=0.4;//overlap_size/cluster_size

for ($i=$first_period;$i<=$last_period;$i+=$time_steps) {
    $period_string=($i-$dT).' '.$i;
    //echo $period_string.'<br/>';
    $period_score=0;
    $sql="SELECT id_cluster,periode FROM cluster WHERE pseudo=$id_partition AND periode='".$period_string."' GROUP BY id_cluster";
    //echo '<br/>'.$sql;
    $resultat=mysql_query($sql) or die ("<b>Requête non exécutée (récupération des clusters d'une période pour une partition)</b>.");
    //echo $sql.'<br/>';
    $count=0;
    while ($ligne=mysql_fetch_array($resultat)) {
        $commande_sql_pert = "SELECT id_billet,id_auteur,overlap_size,billet_size,cluster_size from biparti where cluster = '".$ligne[id_cluster]."' AND periode = '".$ligne[periode]."' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=".$seuil_pertinence." and overlap_size/cluster_size>".$penetration_thematique;
        //echo $commande_sql_pert.'<br/>';
        $billet_list=mysql_query($commande_sql_pert) or die ("<b>Requête non exécutée (récupération des billets associés à un cluster)</b>.");
        $auteur_score=array(); //
        while ($billet=mysql_fetch_array($billet_list)) {
            $score=$billet[overlap_size]/$billet[cluster_size]/log10(10+$billet[billet_size]-$billet[overlap_size]);
            //echo $billet[id_auteur].'<br/>';
            if ($auteur_score[$billet[id_auteur]]!=null) {
                if ($score>$auteur_score[$billet[id_auteur]]) {
                    $auteur_score[$billet[id_auteur]]=$score;
                }
            }else {
                $auteur_score[$billet[id_auteur]]=$score;
                $count++;
            }
        }
        $period_score+=array_sum($auteur_score)/10;
    }
    //echo $count.' billets<br/>';
    //echo ' ------------------------<br/>';
    $JSON_string.=round($period_score,4).', ';
    if ($partitionScore<$period_score){
        $partitionScore=$period_score;
        $periodWithMaxScore=$period_string;
    }
}
echo 'partition '.$id_partition.'with score'.$partitionScore.'at '.$periodWithMaxScore.'<br/>';
    //echo ' ------------------------<br/>';

$sqlScore="INSERT INTO partitions (id_partition,score,periodWithMaxScore) VALUES ('".$id_partition."','".$partitionScore."','".$periodWithMaxScore."') ON DUPLICATE KEY UPDATE id_partition='".$id_partition."',
score='".$partitionScore."', periodWithMaxScore='".$periodWithMaxScore."'";
echo $sqlScore;
mysql_query($sqlScore) or die ("<b>Insert of total_number_of_cluster failed</b>.");;

}

//on ferme l'acces à la base de donnees
mysql_close($ink);

echo '</div>';
echo '
<script> $(function() { '.$jscriptmp.' });</script>';
?>