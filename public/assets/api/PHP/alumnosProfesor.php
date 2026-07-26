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

$dni = $_GET["DNI"];


$consulta = "swipl --quiet -g \"load_files('%s'), load_files('%s'), (forall(profesor_estudiante('{$dni}',NombreEstudiante,CuentaEstudiante,CorreoEstudiante), format('~w,~w,~w~n', [NombreEstudiante, CuentaEstudiante, CorreoEstudiante])) ; true)\" -t halt  | python3 %s Estudiantes Nombre,Cuenta,Correo";


$json = $consultaProlog($consulta);

echo($json);

