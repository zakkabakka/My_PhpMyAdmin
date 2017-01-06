<?php

try
{
  $bdd = new PDO('mysql:host=localhost', 'root', 'root');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$value = $_POST['value'];
echo $value;

$reponse = $bdd->query('CREATE DATABASE IF NOT EXISTS '. $value);

$reponse->execute();

echo $reponse->errorInfo();
?>
