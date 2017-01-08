<?php
$oldValue = $_POST['oldDatabase'];
try
{
  $bdd = new PDO('mysql:host=localhost;dbname='.$oldValue, 'root', 'root');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$newValue = $_POST['newDatabase'];
$parsed_json = json_decode($_POST['tables']);

$reponse = $bdd->query('CREATE DATABASE IF NOT EXISTS '. $newValue);

$reponse->execute();

for ($i=0; $i < count($parsed_json); $i++) { 
	$table = $parsed_json[$i]->{'Tables_in_'.$oldValue};
	($i == 0) ? $rename = $oldValue.'.'.$table.' TO '.$newValue.'.'.$table : $rename = $rename.', '.$oldValue.'.'.$table.' TO '.$newValue.'.'.$table;
}

echo $rename;
$reponse = $bdd->query('RENAME TABLE '.$rename.';');

$reponse->execute();

$reponse = $bdd->query('DROP DATABASE '.$oldValue);

$reponse->execute();

?>
