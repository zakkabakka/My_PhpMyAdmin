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
$oldTable = $_POST['oldTable'];
$newTable = $_POST['newTable'];

$reponse = $bdd->query('RENAME TABLE '.$oldTable.' TO '.$newTable.';');

$reponse->execute();

?>
