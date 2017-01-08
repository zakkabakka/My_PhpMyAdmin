<?php
$db = $_POST['database'];
try
{
  $bdd = new PDO('mysql:host=localhost;dbname='.$db, 'root', 'root');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
$table = $_POST['table'];

$reponse = $bdd->query('DROP TABLE '.$table.';');

$reponse->execute();

?>
