<?php
include("login_check.php");
include("library/fonctions_php.php");

//connexion a la base de donnees

include("parametre.php");
$ink  =mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
//à préciser lorsqu'on est sur sciencemapping.com
if ($user!="root") mysql_query("SET NAMES utf8;");




//*************************************************
//bloc vérification des arguments (pour projection)
//*************************************************

$projection="";
if(isset( $_GET['id_concept'])) 
	{
		$id_concept = intval($_GET['id_concept']);
		$projection="concept";
		$id_proj=$id_concept;
	}
if(isset( $_GET['id_source'])) 
	{
		$id_source = intval($_GET['id_source']);
		$projection="source";
		$id_proj=$id_source;
	}

//*******************************************
//bloc transformation des attributs de la carte
//*******************************************


function get_concepts_in($id_proj,$periode)
{
	$sql="select id_cluster FROM cluster WHERE concept=".$id_proj." AND periode=\"$periode\"";
	$resultat=mysql_query($sql) or die ("Requite non executée.");
	while ($ligne=mysql_fetch_array($resultat)) $liste_clusters[] = $ligne['id_cluster'];
	return $liste_clusters;
}

function get_sources_in($id_proj,$periode)
{
	$sql="select cluster FROM biparti WHERE (id_auteur LIKE "."'%, ".$id_proj.",%' OR id_auteur LIKE "."'%[".$id_proj.",%' OR id_auteur LIKE "."'%[".$id_proj."]%' OR id_auteur LIKE "."'%, ".$id_proj."]%')  AND periode=\"$periode\" and overlap_size/cluster_size>0.15 GROUP by cluster ";
	$resultat=mysql_query($sql) or die ("Requite non executée.");
	$liste_clusters=array();
	while ($ligne=mysql_fetch_array($resultat)) $liste_clusters[] = $ligne['cluster'];
	return $liste_clusters;
}


function transforme_gexf($mapgexf,$projection,$id_proj,$periode)
{
	$texte='';
	if ($projection == "concept") { $liste_clusters=get_concepts_in($id_proj,$periode); }
	elseif($projection == "source") { $liste_clusters=get_sources_in($id_proj,$periode); }

	$fichier=$mapgexf;
	$tabfich=file($fichier); 		
	
	if (is_dir("TMP") == False)
	{mkdir("TMP");}
	if (is_dir("TMP/".$_COOKIE['ID_my_site']) == False)
	{mkdir("TMP/".$_COOKIE['ID_my_site']);}
	$tmpfname = tempnam("TMP", "TMP-cartes_");
	unlink($tmpfname);
	$tmpfnamev=explode('/',$tmpfname);
	$tmpfname='TMP'.'/'.$_COOKIE['ID_my_site'].'/'.$tmpfnamev[count($tmpfnamev)-1].'.gexf';
	$temp=$tmpfname;
	
	$sortie=$temp;
	//echo $sortie;
	$fichier_out = fopen($sortie,'w');
	for( $i = 0 ; $i < count($tabfich) ; $i++ )
	{
		if(stristr($tabfich[$i], '</gexf>')=== FALSE)
		{}
		else
		{
			$texte = $texte.$tabfich[$i];
			fputs($fichier_out,$texte);
		}
		
		if(stristr($tabfich[$i], 'node id=') === FALSE) 
			{
				
				if(stristr($tabfich[$i], 'viz:color') === FALSE) 
					{
						$texte = $texte.$tabfich[$i];
					}
				else
					{		
						$texte  = $texte."<viz:color b=\"250\" g=\"250\" r=\"250\"/>\n";
					}
			}
		else
		{	
			$texte =  $texte.$tabfich[$i];
			if ($sauf >0)
			{
				
				$texte=str_replace("<viz:color b=\"250\" g=\"250\" r=\"250\"","<viz:color b=\"50\" g=\"50\" r=\"200\"",$texte);
				}
			fputs($fichier_out,$texte);
			$texte='';
		}
		  if(stristr($tabfich[$i], 'cluster.php') === FALSE) 
			{}
			else{
				$ligne =  $tabfich[$i];					
				$substr = split('id_cluster=',$ligne);
				$id_clu = split('&',$substr[1]);
				$sauf=0;
				if (count($liste_clusters)>0){
				if (in_array($id_clu[0],$liste_clusters))
				{
					$sauf =1;
				}}
			
			}		
	}
	fclose($fichier_out);

	$mapgexf_projete = $sortie;
	return $mapgexf_projete;
}

//*******************************************
//bloc récupération des périodes des clusters
//*******************************************

$periode_concepts=array();
$periode_brute=array();
//echo "select concept,periode FROM cluster ORDER by periode";
$resultat=mysql_query("select concept,periode FROM cluster ORDER by periode") or die ("<b>Requête non exécuté (récupération des périodes pour les concepts)</b>.");
while ($ligne=mysql_fetch_array($resultat)) {
	$id=$ligne['concept'];
	$per=$ligne['periode'];
	if ($per!=""){ // exception pour éviter un bug de la BDD avec concept 0 à période ""
		if (!array_key_exists($id,$periode_concepts)) $periode_concepts[$id][]=$per;
		else {
			if (!in_array($per,$periode_concepts[$id])) $periode_concepts[$id][]=$per;
		}
		if (!in_array($per,$periode_brute)) $periode_brute[]=$per;
	}
}
	
//agrégats
$list_of_periods=sort_periods($periode_brute);
if(isset( $_GET['periode'])) $my_period=$_GET['periode']; else $my_period=arrange_periode(end($list_of_periods));

$titleheader='carte ('.get_short_string_periode($my_period).')';
include("include/header.php");
include("banner.php");





//*******************************************
//bloc choix du terme
//*******************************************

$resultat=mysql_query("select id,forme_principale FROM concepts ORDER by forme_principale") or die ("Requête non executées.");
while ($ligne=mysql_fetch_array($resultat)){
	$id=$ligne['id'];
	$dico_termes[$id]=$ligne['forme_principale'];
	$add_concept_now=0;
	if (array_key_exists($id,$periode_concepts))
		if (in_array($my_period,arrange_periode($periode_concepts[$id]))) $add_concept_now=1;
	if ($my_period==-1) $add_concept_now=1;
	if ($add_concept_now) {
		$liste_termes_brute[] = $ligne['forme_principale'];
		$id_termes_brute[] = $id;
		}
}

//*******************************************
//bloc récupération des sources
//*******************************************
//$resultat=mysql_query("select id,auteurs FROM auteurs ORDER by auteurs") or die ("Reque non executée.");

$resultat=mysql_query("SELECT auteurs.id, auteurs
FROM socsem, auteurs
WHERE auteurs.id = socsem.auteur
GROUP BY socsem.auteur ORDER by auteurs
")
 or die ("Requête non executée sur socsem.");

// $resultat=mysql_query("SELECT id, auteurs
// FROM auteurs ORDER by auteurs
// ") or die ("Requête non executée sur socsem.");
while ($ligne=mysql_fetch_array($resultat))
{
	$nom_auteurs[]= $ligne["auteurs"];
	$id_auteurs[] = $ligne["id"];
	$dico_auteurs[$ligne["id"]]=$ligne["auteurs"];
}

$id_auteurs_reduit=array();
$sql="select id_auteur FROM biparti WHERE periode ='".derange_periode($my_period)."' GROUP by id_auteur ";

$resultat=mysql_query($sql) or die ("Reqe non executée.");
while ($ligne=mysql_fetch_array($resultat))
	{
		$champ_aut_id = $ligne["id_auteur"];
		if ($champ_aut_id[0]='[')
		{
			$champ_aut_id = str_replace('[','',$champ_aut_id);
			$champ_aut_id = str_replace(']','',$champ_aut_id);
			$champ_aut_id = explode(', ',$champ_aut_id);
			for( $i = 0 ; $i < count($champ_aut_id) ; $i++ )
			{
				$id_auteurs_reduit[] = $champ_aut_id[$i];
				$dico_auteurs_reduit[$champ_aut_id[$i]]=			$dico_auteurs[$champ_aut_id[$i]];
			}
		}
		else
		{
				$id_auteurs_reduit[] = $champ_aut_id;
				$dico_auteurs_reduit[$champ_aut_id]=			$dico_auteurs[$champ_aut_id];
		}
	}

asort($dico_auteurs_reduit);
//*******************************************
//bloc affichage carte
//*******************************************


echo '<table width=100% class=tableitems>';
echo '<tr valign=top><td width=2.5%></td><td>';
echo '<table class=subtitle width=100%><tr><td align=left>carte ';

if ($projection=="") echo 'générale des champs thématiques';
if ($projection=="concept") echo 'projetée sur le terme "<i>'.$dico_termes[$id_concept].'</i>"';
if ($projection=="source") echo 'projetée sur la source "<i>'.$dico_auteurs[$id_source].'</i>"';

$jscriptmp="";
display_helper(
	'Vue globale des champs thématiques',
	'Tous les  <a href="aide.php?selectedTab=2"><font color=blue>champs thématiques</font></a> de la période sélectionnée sont représentés sur cette carte par des cercles.
        La proximité thématique entre champs est représentée par des liens et est reflétée par
        une proximité spatiale.',
	'');
$jscriptmp.="$('#dialog')
.dialog({ autoOpen: false, stack: true, resizable: false, modal:true, width:600, closeOnEscape:true})
.click(function () { $('#dialog').dialog('close'); });
$('#opener').click(function(e) {
if (!$('#dialog').dialog('isOpen'))
$('#dialog').dialog('option','position', [$(this).position().left+25,2]).dialog('open');
else
$('#dialog').dialog('close');
return false;
});";
	
echo '
		<script> $(function() { '.$jscriptmp.' });</script>';

$adresse_root= $_SERVER['DOCUMENT_ROOT'];
//$mapgexf=$adresse_root.'/'.$dbid."/".$exportid."/cartes/".str_replace("_","-",$my_period)."_gs.gexf";
$mapgexf=$hrefroot.$racine."/data/cartes/".$exportid."/".str_replace("_","-",$my_period)."_gs.gexf";
// echo $mapgexf;
if (strlen($projection)>0) {$mapgexf = transforme_gexf($mapgexf,$projection,$id_proj,str_replace('-',' ',$my_period));}
//echo $mapgexf;


if ($projection!="") {
	//echo '<td align=right><form action="global.php" method="get" style="display:inline;"><input type="submit" value="Revenir à la carte générale"></form>&nbsp;';
	$selecteur_periode="Afficher la carte générale pour cette période";
	}
	else $selecteur_periode="Modifier";

echo '<td align=right style="color:black;font-weight:bold;">';
	
	
	
	//on extrait d'abord la liste totale des périodes: $total_list_periods
	$commande_sql = "SELECT periode from cluster GROUP BY periode";
	$total_periode_sql=mysql_query($commande_sql);
	while ($total_periode_sql_i=mysql_fetch_array($total_periode_sql))
	{
		$total_periods_raw[]=$total_periode_sql_i['periode'];
	}
		$total_list_periods=sort_periods($total_periods_raw);
	
	//on affiche les flèches pour se ballader dans les périodes
	display_arrow_periodes($my_period,$total_list_periods);
	
	echo '<form action="global.php" method="get" style="display:inline;">';
	echo '<select name="periode">';
	for ($i=0;$i<count($list_of_periods);$i++) {
		echo '<option value='.$list_of_periods[$i];
		if ($list_of_periods[$i]==$my_period) echo(" selected");
		echo '>';
		echo get_string_periode($list_of_periods[$i]);
		echo '</option>';
		}
	echo '</select>';
	echo '<input type="submit" value="'.$selecteur_periode.'">';
	echo ' </form>';
	echo "</td>";

echo '</tr></table>';
echo '</td><td width=2.5%></td>';
echo '</tr>';

echo "<tr valign=top>";
echo "<td width=2.5%></td>";
echo "<td width=95%>";


if (strlen($projection)>0)
{
	//$mapgexf = "http://maps.sciencemapping.com/temporaire.gexf";
	
}
else
{
	
	$mapgexf=$hrefroot.$racine."/data/cartes/".$exportid."/".str_replace("_","-",$my_period)."_gs.gexf";
	
}
//echo "<br>";
//echo $mapgexf;
?>
<object width="100%" height="300" id="GexfExplorer">
	<script type="text/javascript">
		<!-- Start		
		/* Copyright (c) 2006-2009 Paranoid Ferret Productions.  All rights reserved.

		 * Developed by: Paranoid Ferret Productions
		 * 			http://www.paranoidferret.com
		 * 
		 * Permission is hereby granted, free of charge, to any person obtaining a copy
		 * of this software and associated documentation files (the "Software"), to
		 * deal with the Software without restriction, including without limitation the
		 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
		 * sell copies of the Software, and to permit persons to whom the Software is
		 * furnished to do so, subject to the following conditions:
		 * 1. Redistributions of source code must retain the above copyright notice,
		 *    this list of conditions and the following disclaimers.
		 * 2. Redistributions in binary form must reproduce the above copyright
		 *    notice, this list of conditions and the following disclaimers in the
		 *    documentation and/or other materials provided with the distribution.
		 * 3. Neither the name Paranoid Ferret Productions, nor the names of its 
		 *    contributors may be used to endorse or promote products derived 
		 *    from this Software without specific prior written permission.
		 * 
		 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
		 * CONTRIBUTORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
		 * WITH THE SOFTWARE.
		 */		 
		function stopScroll(element, eventName, handler)
			{
			if(typeof(element) == "string")
				element = document.getElementById(element);
			if(element == null)
				return;
			if(element.addEventListener)
			{
				if(eventName == 'mousewheel')
				element.addEventListener('DOMMouseScroll', handler, false);  
				element.addEventListener(eventName, handler, false);
			}
			else if(element.attachEvent)
				element.attachEvent("on" + eventName, handler);
		}
		function cancelEvent(e)
		{
			e = e ? e : window.event;
			if(e.stopPropagation)
				e.stopPropagation();
			if(e.preventDefault)
				e.preventDefault();
			e.cancelBubble = true;
			e.cancel = true;
			e.returnValue = false;
			return false;
		}
		stopScroll('GexfExplorer', 'mousewheel', cancelEvent);
		// end -->
	</script>
	<param name="movie" value="bin/GexfExplorer1.0.swf?path=
	<? echo $mapgexf?>
	'&curvedEdges=true&labelSize=1800&scaledTextSize=false&clickableNodes&nodeBorderColor=0x000000&clickableNodes=true&labelsColor=0x000000&font=Verdana&initialNodesRatio=6&edgesThickness=5&clickableAttribute=fathersbis&fps=false&edgesColor=0xB3D0EC" />
	<param name="allowFullScreen" value="true" />
	<param name="allowScriptAccess" value="always" />
	<param name="bgcolor" value="#FFFFFF" />
	<embed src="bin/GexfExplorer1.0.swf?path=
		<? echo $mapgexf?>
	&curvedEdges=true&scaledTextSize=false&labelSize=1800&clickableNodes=true&nodeBorderColor=0x000000&labelsColor=0x000000&font=Verdana&clickableAttribute=fathersbis&initialNodesRatio=6&edgesThickness=5&fps=false&edgesColor=0xB3D0EC" allowFullScreen="true" allowScriptAccess="always" width="100%" height="300" bgcolor="#FFFFFF">
	</embed>
</object>
<?
echo "<p>";
echo "<table width=100% class=tableitems><tr><td align=left>";
echo "Terme: ";
echo '<form action="global-helper.php" method="get" style="display:inline;">';
echo '<select name="id_concept">';
for ($i=0;$i<count($liste_termes_brute);$i++)
{

if ($id_termes_brute[$i]==$id_concept){	echo '<option value='.$id_termes_brute[$i].' selected>'.$liste_termes_brute[$i].'</option>';}
else
{	echo '<option value='.$id_termes_brute[$i].'>'.str_replace('popostrophe ',"’",$liste_termes_brute[$i]).'</option>';}
}
//if ($id_termes_brute[$i]==$id_concept) {echo " selected";}
//	echo '>'.$liste_termes_brute[$i].'</option>';

echo '</select>';
echo '<input type="hidden" value="'.$my_period.'" name="periode">';
echo '<input type="submit" value="Explorer" name="op">';
echo '<input type="submit" value="Projeter" name="op">';
echo '</form>';
echo "</td>";
//echo "</tr><tr>";
echo "<td align=right>";
echo "Source: ";
echo '<form action="global-helper.php" method="get" style="display:inline;">';
echo '<select name="id_source">';
$liste_source_reduit = array_keys($dico_auteurs_reduit);
for ($i=0;$i<count($liste_source_reduit);$i++)
if ($liste_source_reduit[$i]==$id_source)	{echo '<option value='.$liste_source_reduit[$i].' selected>'.$dico_auteurs[$liste_source_reduit[$i]].'</option>';}
else
{echo '<option value='.$liste_source_reduit[$i].'>'.$dico_auteurs[$liste_source_reduit[$i]].'</option>';}
echo '</select>';
echo '<input type="hidden" value="'.$my_period.'" name="periode">';
echo '<input type="submit" value="Explorer" name="op">';
echo '<input type="submit" value="Projeter" name="op">';
echo '</form></td>';


echo "<td width=2.5%></td>";

//DEBUGGAGE DE LA CARTE QUI EST EFFECTIVEMENT ENVOYEE A GEXF:
echo '<table class=commentitems width=100% ><tr valign=top><td><table class=commentitems>';
echo '<tr><td><b>Raccourcis clavier (après avoir cliqué sur la carte):</b></td></tr>';
echo '<tr><td>';
echo '- <i>déplacement haut, bas, gauche droite:</i> flèches correspondantes</td></tr>';
echo '<tr><td>';
echo '- <i>agrandir/rétrécir: </i><b style="font-variant:small-caps;">ctrl</b> (ou <b style="font-variant:small-caps;">command</b>) + flèches haut/bas</td></tr>';
echo '</table></td>';
echo '<td align=right><b>Cliquez sur <img src="images/fullscreen.jpg" width="25" align="absmiddle" height="23"> pour une vue plein écran</b>';

//on affiche ici le nom du gexf
//echo '<div align=right style="font-size:5pt;">gexf:'.$mapgexf.'</div>';
echo '</td></table>';


echo "</tr></table>";


echo "</tr></table>";




//on ferme l'acces à la base de donnees
mysql_close($ink);
include("footer.php");
?>