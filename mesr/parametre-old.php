<?php
$domain = $_SERVER['HTTP_HOST'];
$hrefroot = 'http://'.$domain;
//calcul des chemins
$exportid='veille';
$racine=$_SERVER['PHP_SELF'];
$racine_v = explode('/',$racine);
array_pop($racine_v);
$racine=implode("/", $racine_v);
//$racine = '/site.v1/veille/biodiv/';
$dbid=$racine;




$multi_auteurs=0;
$dated=132;
$datef=193;
$database='veille2';             // a changer avec la base
$type_notice = 'article';
$type_notice = 'blog';
$type_date='jour';

//"/Users/louiseduloquin/Dropbox/summerjob/site.v1/veille/biodiv/

$system = $_SERVER['SCRIPT_FILENAME'];
$system_v = explode('library',$system);
$hrefrootroot = $system_v[0];
$jp_system = "louiseduloquin";
$david_system = "David";
$cam_system = "cam";
$jp_system_old = "cointet";

if (strpos($system,$jp_system)>0 || strpos($system,$jp_system_old)>0)
{$conf=4;}
if (strpos($system,$david_system)>0 || (strpos($system,"Fichiers")>0))
{$conf=3;}
if ((strpos($system,$cam_system)>0) || (strpos($system,"Library/WebServer/Documents")>0))
{$conf=2;}

/// *** ATTENTION *** config forcée pour mes tests

//configurations de la base de données
if ($conf==2)
{
//camille
$server="localhost";
$user="root";
$password="";
}

if ($conf==3)
{
//david
$server="localhost";
$user="root";
$password="";
}

if ($conf==4)
{
//jp
$server="localhost";
$user="root";
$password="root";
//$database='nature';
//$type_date='annee';
//$dated=1970;
//$datef=2009;
}

if ($conf==45)
{
$user = "sciencemrgti";
$password="moma12";
$database="sciencemrgti";
$server = "mysql5-1";
$dbid="biofuel";
$type_date='jour';
$exportid="data";//seuil 0.3, CutOff .91.
$dated=80;
$datef=169;
}

if ($conf==1)
{
$user = "sciencemsantee";
$password="mesr11";
$database="sciencemsantee";
$server = "mysql5-3";
$dbid="MESR4";
$exportid="EXP2";
}



//$univ_time_begin = "2009-12-31";# a regler dans fonctions_php.php

$xlab = array('','','','','','17/05','','','','','','','24/05','','','','','','','31/05','','','','','','','7/06','','','','','','','14/06','','','','','','','21/06','','','','','','','28/06','','','','','','','5/07','','','','','','','12/07','','','','','','','19/07','','','','','','','26/07','','','','','','','27/07','','','','','','','04/08','','','','','','','11/08','','','','','','','18/08','','','','','','','25/08','','','','','','','2/09','','','','','','','9/09','',''); 	
$xlab = array_slice($xlab,0,$datef-$dated);

$admins=array();
$admins[]='chavalarias';
$admins[]='cointet';
$admins[]='roth';
$admins[]='mesradmin';
$admins[]='admin';
?>