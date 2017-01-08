<?php

try
{
  $bdd = new PDO('mysql:host=localhost', 'root', 'root');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$value = $_POST['database'];

$reponse = $bdd->query('DROP DATABASE IF EXISTS '. $value);

$reponse->execute();

?>
