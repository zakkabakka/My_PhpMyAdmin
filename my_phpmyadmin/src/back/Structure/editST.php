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
$parsed_json = json_decode($_POST['colonne']);

$nom = $parsed_json->{'nom'};
$type = $parsed_json->{'type'};
$taille = $parsed_json->{'taille'};
if ($parsed_json->{'index'} != NULL)
  $index = $parsed_json->{'index'};
else
  $index = '';
if ($parsed_json->{'isNull'} != 1)
  $isNull = 'NOT NULL';
else
  $isNull = '';
if ($parsed_json->{'isAI'} == 1)
  $isAI = 'AUTO_INCREMENT';
else
  $isAI = '';

if ($taille == NULL)
 	$reponse = $bdd->query('ALTER TABLE '.$table.' CHANGE COLUMN '.$structure.' '.$nom.' '.$type.' '.$isNull.' '.$isAI.' '.$index);
else 
	$reponse = $bdd->query('ALTER TABLE '.$table.' CHANGE COLUMN '.$structure.' '.$nom.' '.$type.'('.$taille.') '.$isNull.' '.$isAI.' '.$index);

$reponse->execute();
?>
