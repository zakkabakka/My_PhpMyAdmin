<?php
$db = $_GET['database'];
try
{
  $bdd = new PDO('mysql:host=localhost;dbname='.$db, 'root', 'root');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$reponse = $bdd->query('SHOW TABLES;');

$reponse->execute();

$result = $reponse->fetchAll( PDO::FETCH_ASSOC );

header('Content-Type: application/json');
echo json_encode( $result );
?>
