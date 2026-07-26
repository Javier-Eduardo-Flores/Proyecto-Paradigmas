<?php
/*
 * @author jose.inestroza@unah.edu.hn
 * @author Machigua
 * @version 0.1.1
 * @date 26/06/29
 * @since 26/06/25
 * 
 * 
Endpoint encargado de consultar las clases cursadas de cierto estudiante a Prolog, valiendose del servicio
Sub-Consultas

*/ 

header("Content-Type: application/json");

["resultadoConsulta" => $consultaProlog] = include __DIR__."/../../../../service/PHP/Sub-Consultas/index.php";

$cuenta = $_GET["Cuenta"];


$consulta = "swipl --quiet -g \"load_files('%s'), load_files('%s'), (forall(clases_Estudiante('{$cuenta}', Codigo, Nombre, Calificacion), format('~w,~w,~w~n', [Codigo, Nombre, Calificacion])) ; true)\" -t halt  | python3 %s Asignaturas Codigo,Nombre,Calificacion";


$json = $consultaProlog($consulta);

echo($json);

