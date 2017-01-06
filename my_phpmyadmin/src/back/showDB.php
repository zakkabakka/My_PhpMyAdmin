<?php

try
{
  $bdd = new PDO('mysql:host=localhost', 'root', 'root');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$reponse = $bdd->query('SHOW DATABASES;');

$reponse->execute();

$result = $reponse->fetchAll( PDO::FETCH_ASSOC );

header('Content-Type: application/json');
echo json_encode( $result );
?>
