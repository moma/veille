<?
//include("login_check.php");
include("library/fonctions_php.php");
include("parametre.php");
$raphael=TRUE;
//include("include/header.php");
//include("banner.php");
mysql_connect( $server,$user,$password);if ($encodage=="utf-8") mysql_query("SET NAMES utf8;");
@mysql_select_db($database) or die( "Unable to select database");
$check = mysql_query("SELECT * FROM users")or die(mysql_error());
while($info = mysql_fetch_array( $check )){
echo $info['username'];
}

echo 'toto';

include("footer.php");

?>

</body>
</html>
