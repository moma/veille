<?

	$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."' AND overlap_size/cluster_size/log10(10+billet_size-overlap_size)>=".$pertinence.' and overlap_size/cluster_size>0.1 LIMIT 80';
	$res_temp = mysql_query($commande_sql_pert);
	while ($row = mysql_fetch_array ($res_temp))
	{
		$liste_of_posts[$row['id_billet']]=$row['overlap_size'];
		$liste_of_size[$row['id_billet']]=$row['billet_size'];
	}

	if (count($liste_of_posts)==0)
	{
		$affichage=0;
	}
	else
	{
		$affichage=1;
	}

if ($affichage>0)
{
/////////////CALCULS QUI SERVENT POUR L'appli sociale
	
	$commande_sql = "SELECT label_1, label_2 from cluster where id_cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."'";

	$resultat=mysql_query($commande_sql);
	while ($billes=mysql_fetch_array($resultat))
		{
		$commande_sql2 = "SELECT forme_principale from concepts where id = '".$billes['label_1']."'";
		$resultat2=mysql_query($commande_sql2);	
		while ($billes2=mysql_fetch_array($resultat2))	
		{
		$label_1 = $billes2['forme_principale'];
		}

					$commande_sql2 = "SELECT forme_principale from concepts where id = '".$billes['label_2']."'";
					$resultat2=mysql_query($commande_sql2);	
					while ($billes2=mysql_fetch_array($resultat2))	
					{
						$label_2 = $billes2['forme_principale'];
					}
					$cluster_name =$label_1.' - '.$label_2.' ('.$id_cluster.', '.$my_period.')';
					$cluster_name ='champ:'.$id_cluster.','.$my_period;

				}

	//		$commande_sql = "SELECT id_billet from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."'";
	//		$resultat=mysql_query($commande_sql);
			//while ($billes=mysql_fetch_array($resultat))
			//on repart de res_temp: requete qui donne les billets associés au champ au-delà d'un certain score de pertinence
			$res_temp = mysql_query($commande_sql_pert);
			while ($billes=mysql_fetch_array($res_temp))
				{
					$billet_index = $billes['id_billet'];
					$sql_auteur = "SELECT auteur_id,site from billets where id = '$billet_index'";
					$res_auteur=mysql_query($sql_auteur);
					while ($sql_auteurs=mysql_fetch_array($res_auteur))
					{
						$champ_aut_id = $sql_auteurs['auteur_id'];
						if ($champ_aut_id[0]='[')
						{
							$champ_aut_id = str_replace('[','',$champ_aut_id);
							$champ_aut_id = str_replace(']','',$champ_aut_id);
							$champ_aut_id = explode(', ',$champ_aut_id);
							$sql_auteurs_names=$sql_auteurs['site'];
							$sql_auteurs_names=explode(' *** ',$sql_auteurs_names);
							for( $i = 0 ; $i < count($champ_aut_id) ; $i++ )
							{
								$auteurs[] = $champ_aut_id[$i];
								$legende[$champ_aut_id[$i]]=$sql_auteurs_names[$i];
							}
							
						}
						else
						{$auteurs[] = $sql_auteurs['auteur_id'];
						$legende[$sql_auteurs['auteur_id']]=strip_www($sql_auteurs['site']);}
					}
				}
			//echo 	$commande_sql;
			
			
				$aut_occ = array_count_values($auteurs);
				//print_r($aut_occ);
				foreach($aut_occ as $key => $value) {
				$liste_auteur_unique[] = $key;
				}

				$sql = "SELECT auteur1, auteur2 from soc where (";
				$compteur = 0;
				foreach($liste_auteur_unique as $value)
				{
					$compteur = $compteur+1;
					$sql =$sql."auteur1 = '".$value."'";
					if ($compteur < count($liste_auteur_unique))
					{
						$sql =$sql." OR ";
					}

				}
				$sql  = $sql.") AND (";

				$compteur = 0;
				foreach($liste_auteur_unique as $value)
				{
					$compteur = $compteur+1;
					$sql =$sql."auteur2 = '".$value."'";
					if ($compteur < count($liste_auteur_unique))
					{
						$sql =$sql." OR ";
					}
				}
				$sql  = $sql.")";


				if ($all_periode==0)//on prend le réseau social sur la période uniquement
				{$peroides = explode_period($periode);
				$sql =$sql.' AND jours<='.$peroides['to']." AND jours>=".strval(intval($peroides['from']));
				}

				if ($_POST['reduced']==1)//on prend le réseau social sur les liens des billets pertinents uniquement
				{
					$sql=$sql.' AND (';
					$id_billets_list = array_keys($liste_of_posts);	
					for( $i = 0 ; $i < count($id_billets_list) ; $i++ )
					{
						$sql=$sql.' id_b='.$id_billets_list[$i];
						if ($i+1<count($id_billets_list))
						{
							$sql=$sql.' OR ';
						}
					}
							$sql=$sql.' ) ';	
				}


				$res = mysql_query($sql);
				while ($sql_liens=mysql_fetch_array($res))
				{
					$aut1 = $sql_liens['auteur1'];
					$aut2 = $sql_liens['auteur2'];
					if ($aut1 ==$aut2)
					{}
					else
					{//$liens[$aut1]=$aut2;
						$liens_from[]=remove_popo($aut1);
						$liens_to[]=remove_popo($aut2);
		//				echo 'lien de '.$legende[$aut1].' à '.$legende[$aut2].'<br>';
					}
				}
	
	
	
	$tmpfile= ecrire_json($liste_auteur_unique,$legende,$aut_occ,$liens_from,$liens_to,$cluster_name,1);}
	
	
///////FIN DES CALCULS FICHIERS JSON DU RESEAU SOCIAL ECRIT




	// PORTION CONCERNANT L'AFFICHAGE EN FLEX DU RESEAU SOCIAL
	
	echo '<p>';
	if ($affichage>0)
	{
		echo '<script src="AC_OETags.js" language="javascript"></script>';
	}
	//affichage de l'appli flex

	echo "\n";
	echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;"><tr>';
	echo "<td align=center width=10%><i>PÉRIODE PRECEDENTE</i>&nbsp;&nbsp;</td>";
	echo "<td align=center width=80%><i><b>RÉSEAU SOCIAL (80 articles les plus pertinents au-delà du seuil)</b><br>PÉRIODE ACTUELLE</i></td>";
	echo "<td align=center width=10%><i>PÉRIODE SUIVANTE</i></td>";
	echo "</tr>";


	echo "<tr>";
	//on affiche les clusters précédents et un lien vers leur réseau social
	echo "<td align=center width=10%><i>";
	if ($nopred) echo '<b style="font-variant:small-caps;">(pas de prédécesseur)</b>';
	echo '<table class=commentitems align=center width=100% cellspacing=0 cellpadding=5 rules=rows style="font-variant:small-caps; size:small; font-style:italic;">';
	foreach ($pred as $p) {
		$label1=$p['label1'];
		$label2=$p['label2'];
		echo '<tr>';
		echo '<td>';
		echo '<a href=cluster.php?id_cluster='.$p['id']."&periode=".arrange_periode($p['periode']).'&nav=soc'.'&pertinence='.strval(100*$pertinence).'>';
		$past = intval($p['pere']);
		if ($past>0)
		{
			echo '&uarr';
		}
		echo '"<b>'.$dico_termes[$label1].'</b> - '.$dico_termes[$label2].'"';
		echo '</a><br>';
//		selective_column($arraykey,$p['termes'],$p['plus'],$p['minus'],0);
		echo '</td>';
		echo '</tr>';

		}
		echo '</table>';

	echo "</td>";
	
	
	
	echo "<td align=middle width=80%><i>";	
	if ($affichage>0)
	{
		echo '<script language="JavaScript" type="text/javascript">';
		echo '<!--
			
		var requiredMajorVersion = 9;
		var requiredMinorVersion = 0;
		var requiredRevision = 124;
		// -->
		</script>';
	
	echo '<script language="JavaScript" type="text/javascript">
		<!--
		// Version check for the Flash Player that has the ability to start Player 	Product Install (6.0r65)
		var hasProductInstall = DetectFlashVer(6, 0, 65);
	
		// Version check based upon the values defined in globals
		var hasRequestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	
		if ( hasProductInstall && !hasRequestedVersion ) {
			// DO NOT MODIFY THE FOLLOWING FOUR LINES
			// Location visited after installation is complete if installation is required
			var MMPlayerType = (isIE == true) ? "ActiveX" : "PlugIn";
			var MMredirectURL = window.location;
			document.title = document.title.slice(0, 47) + " - Flash Player Installation";
			var MMdoctitle = document.title;
	
			AC_FL_RunContent(
				"src", "playerProductInstall",
				"FlashVars", "serverURL='.$tmpfile.'",
				"width", "100%",
				"height", "600px",
				"align", "middle",
				"id", "SitePoint_DataViz_Tutorial_Part3",
				"quality", "high",
				"bgcolor", "#869ca7",
				"name", "SitePoint_DataViz_Tutorial_Part3",
				"allowScriptAccess","sameDomain",
				"type", "application/x-shockwave-flash",
				"pluginspage", "http://www.adobe.com/go/getflashplayer"
			);
		} else if (hasRequestedVersion) {
			// if we have detected an acceptable version
			// embed the Flash Content SWF when all tests are passed
			AC_FL_RunContent(
					"src", "SitePoint_DataViz_Tutorial_Part3",
					"FlashVars", "serverURL='.$tmpfile.'",
					"width", "100%",
					"height", "600px",
					"align", "middle",
					"id", "SitePoint_DataViz_Tutorial_Part3",
					"quality", "high",
					"bgcolor", "#869ca7",
					"name", "SitePoint_DataViz_Tutorial_Part3",
					"allowScriptAccess","sameDomain",
					"type", "application/x-shockwave-flash",
					"pluginspage", "http://www.adobe.com/go/getflashplayer"
			);
		  } else {  // flash is too old or we cannot detect the plugin
			var alternateContent = //"Alternate HTML content should be placed here. "+
			"This content requires the Adobe Flash Player. "
			+ "<a href=http://www.adobe.com/go/getflash/>Get Flash</a>";
			document.write(alternateContent);  // insert non-flash content
		  }
		// -->
		</script>';
	
	}
	else
	{
		echo "pas de sources";
	}
	
	
	

		echo "</i></td>";
		echo "<td align=right width=10%>";
		
		if ($nosucc) echo '<b style="font-variant:small-caps;">(pas de successeur)</b>';

		echo '<table class=commentitems align=center width=100% cellspacing=0  cellpadding=5 rules=rows style="font-variant:small-caps; size:small; font-style:italic;">';
		foreach ($succ as $s) {
			$label1=$s['label1'];
			$label2=$s['label2'];
			echo '<tr>';
			echo '<td>';
			echo '<a href=cluster.php?id_cluster='.$s['id']."&periode=".arrange_periode($s['periode']).'&nav=soc'.'&pertinence='.strval(100*$pertinence).'>';
			echo '"<b>'.$dico_termes[$label1].'</b> - '.$dico_termes[$label2].'"';
			if ($futur>0)
			{
				echo '&darr';
			}
			echo '</a><br>';
			echo '</td>';
			echo '</tr>';

			}
		echo '</table>';
		
		echo "</td>";
	echo "</tr>";
	echo "<tr>";
	echo "<td>";
	echo "</td>";
	echo "<td>"
	
	?>
	<table>
		<td align=left>
	<form method="post" action="<?$_SERVER['PHP_SELF']?>" >	 
		<input type="checkbox" name="reduced" <?php if ($reduced=='1') echo 	'checked="checked"'; ?>value="1" />
	 <input type="submit" name="formSubmit" value="N'afficher que les liens entre billets pertinents" />
	</form>

	<form method="post" action="<?$_SERVER['PHP_SELF']?>" >	 
		<input type="checkbox" name="all_periode" <?php if ($all_periode=='1') echo 	'checked="checked"'; ?>value="1" />
	 <input type="submit" name="formSubmit" value="Afficher les liens enregistrés sur l'ensemble des périodes" />
	</form>
	
			</td>
	

	<?

	echo "<td align=right>";
	
	
			echo "<td align=right class=tableitems width=20%><i>seuil de pertinence: "//.strval(100*$pertinence)
			."</i>";

			$old_url  =$_SERVER['REQUEST_URI'];
			$old_urlv = explode('MESR_bac/',$old_url);
			if (count($old_urlv)>0)
				{$old_url = $old_urlv[1];}
			$old_urls = explode('&pertinence=',$old_url);
			$new_url=$old_urls[0];//.'&pertinence=';

				echo '<form action="'.$new_url.'" method="get" style="display:inline;">';
				echo '<select name="pertinence">';
					echo '<option value=10';
					if ($pertinence==0.1) echo(" selected");
					echo '>';
					echo "minimal (>10%)";
					echo '</option>';

					echo '<option value=20';
					if ($pertinence==0.2) echo(" selected");
					echo '>';
					echo "faible (>20%)";
					echo '</option>';

					echo '<option value=30';
					if ($pertinence==0.3) echo(" selected");
					echo '>';
					echo "médian (>30%)";
					echo '</option>';

					echo '<option value=40';
					if ($pertinence==0.4) echo(" selected");
					echo '>';
					echo "fort (>40%)";
					echo '</option>';

				echo '</select>';
				echo '<input type="hidden" value="'.$id_cluster.'" name="id_cluster">';
				echo '<input type="hidden" value="'.$nav.'" name="nav">';
				echo '<input type="hidden" value="'.$periode.'" name="periode">';


				echo '<input type="submit" value="Modifier le seuil de pertinence">';
				echo '</form>';




		$result=mysql_query($query);
	echo "</td>";
	echo "</table>";
	
	echo "</td>";
	echo "</tr>";

	echo '</table>';?>
	
	
	
	
	<?

		echo "\n<p><table width=100%><tr valign=top><td width=95%>";
		echo '<table class=tableitems width=100% cellspacing=0 cellpadding=1 style="font-variant:small-caps;"><tr>';
		
		//décommenter pour récupérer 
//		echo "<td align=left width=20%>";
//		echo "<i>TERMES</i>&nbsp;&nbsp;";
//		echo '[<a href='.$googletext.' target=\"blank\"><img src='.$hrefroot.'/images/googleG.png alt="(google)" valign=middle width=14 style="border-style:none;"></a>]';
//		echo "</td>";
		//echo "<td width=5%></td>";
		
		echo "<td align=left width=40%><i>les 5 billets les plus pertinents</i></td>";

		echo "</tr>";
		echo '</table>';
		
		
		echo "<table class=tableitems rules=all width=100% cellspacing=0 cellpadding=0>";

//décommenter pour récupérer  la liste des termes
//		echo '<tr style="background-color:'.$backdark.';" valign=top align=left>';
//		echo "<td align=left width=20%>";
//		echo "<table class=tableitems width=100% cellspacing=0 cellpadding=2>";
//		echo '<tr style="background-color:'.$backdark.';" valign=top align=left>';
//		usort($list_of_concepts_href,"strcasecmpcam");
//		display_columns(1,$list_of_concepts_href);
//		echo "</tr></table>";

		echo "</td>";
		//echo "<td width=5%></td>";
		echo "<td align=left width=80%>";
		
		
		
		
		
		
		if ($affichage>0)
		{
			
			$commande_sql_pert = "SELECT id_billet,overlap_size,billet_size from biparti where cluster = '".$id_cluster."' AND periode = '".derange_periode($my_period)."'".' and overlap_size/cluster_size>0.15'.' ORDER BY overlap_size/cluster_size/log10(10+billet_size-overlap_size) DESC LIMIT 5';
			
			$res_temp = mysql_query($commande_sql_pert);
			$liste_of_posts=array();
			$liste_of_size=array();
			while ($row = mysql_fetch_array ($res_temp))
			{
				$liste_of_posts[$row['id_billet']]=$row['overlap_size'];
				$liste_of_size[$row['id_billet']]=$row['billet_size'];
			}
			
			
			$nb_termes_list = $liste_of_posts;
			$nb_size_list = $liste_of_size;
			$resultat = extract_permalink(array_keys($liste_of_posts));
			$i=0;
			$info_sources=array();
			while( $row = mysql_fetch_array ($resultat))
			{
				$perma=$row['permalink'];
				$site=strip_www($row['site']);
				$site =str_replace('***','; ',$site);
				$id = $row['id'];
				$nb_terme=$nb_termes_list[$id];
				$nb_size=$nb_size_list[$id];
				$idauteur=$row['auteur_id']; 
				$content=$row['content'];
				if (!array_key_exists($site,$info_sources)) {
				$info_sources[$site]=array('site'=>$site,'idauteur'=>$idauteur,'permaliens'=>array(),'titres'=>array(),'dates'=>array(),'nbtermes'=>array(),'nbsize'=>array());
				}
				$info_sources[$site]['permaliens'][]=$perma;
				$info_sources[$site]['titres'][]=clean_text(str_replace('popostrophe',"'",$row['title']));
				if (strlen($row['jours'])>3)
				{$info_sources[$site]['dates'][]=$row['jours'];}
				else
				{$info_sources[$site]['dates'][]=adjust_date_jours($row['jours']);}
				$info_sources[$site]['nbtermes'][]=$nb_terme;
				$info_sources[$site]['nbsize'][]=$nb_size;
				$info_sources[$site]['content'][]=$content;
				$info_sources[$site]['concepts'][]=$concepts;

				$i++;
			}

			uksort($info_sources,"strcasecmpcam");

		
		
		
			display_billets($info_sources,$list_of_concepts,$my_period,$type_notice);}
							else
							{
								echo "aucun billet pertinent";
							}
							echo "</td>";
							echo "</tr>";
							echo "</table>";
			
		
		
		
		
		echo "</td></tr></table>";
		
		
	?>