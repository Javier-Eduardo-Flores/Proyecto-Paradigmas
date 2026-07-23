<?php
/*
 * @author carlos.machigua@unah.hn
 * @version 0.1.0
 * @date 26/07/22
 * @since 26/07/22
 * 
 * 
    Endpoint encargado de limpiar la base de conocimientos del programa, valiendose del servicio
    Db-Clearing

*/ 
ini_set('display_errors', 1);
error_reporting(E_ALL);
header("Content-Type: application/json");


["dbClearing" => $dbClearing] = include __DIR__."/../../../../service/PHP/Db-Clearing/index.php";

$consulta = "python3 %s %s ";

$clearing = $dbClearing($consulta);

echo($clearing);

exit;