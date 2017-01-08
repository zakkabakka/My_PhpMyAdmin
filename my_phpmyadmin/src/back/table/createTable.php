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
$value = $_POST['value'];
$parsed_json = json_decode($_POST['colonne']);

for ($i = 0; $i < count($parsed_json); $i++) {
  $nom = $parsed_json[$i]->{'nom'};
  $type = $parsed_json[$i]->{'type'};
  $taille = $parsed_json[$i]->{'taille'};
  if ($parsed_json[$i]->{'index'} != NULL)
    $index = $parsed_json[$i]->{'index'};
  else
    $index = '';

  if ($parsed_json[$i]->{'isNull'} != 1)
    $isNull = 'NOT NULL';
  else
    $isNull = '';

  if ($parsed_json[$i]->{'isAI'} == 1)
    $isAI = 'AUTO_INCREMENT';
  else
    $isAI = '';

  ($i == 0) ? $col = $nom.' '.$type.'('.$taille.') '.$isNull.' '.$isAI.' '.$index : $col = $col.', '.$nom.' '.$type.'('.$taille.') '.$isNull.' '.$isAI.' '.$index;
}

$reponse = $bdd->query('CREATE TABLE IF NOT EXISTS '. $value.' (
'.$col.'
)');

$reponse->execute();

?>
