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


$consulta = "swipl --quiet -g \"consult('%s'), consult('%s'), (forall('cantidad estudiantes clase'(Clase,Nombre,Cantidad), format('~w,~w,~w~n',[Clase,Nombre,Cantidad])) ; true)\" -t halt | python3 %s Clases Clase,Nombre,Cantidad";

$json = $consultaProlog($consulta);

echo($json);

