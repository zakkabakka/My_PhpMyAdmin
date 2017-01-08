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
$structure = $_POST['structure'];

$reponse = $bdd->query('ALTER TABLE '.$table.' DROP COLUMN '.$structure);

$reponse->execute();

?>
