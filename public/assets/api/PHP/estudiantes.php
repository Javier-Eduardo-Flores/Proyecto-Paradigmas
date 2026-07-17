<?php
/*

Endpoint encargado de mandar la consulta a Prolog, valiendose del servicio
Consultas-JSON
@author Machigua

no estoy seguro de si agregar la autoria de Inestroza pq este codigo es practicamente lo que hicimos hoy 16/07/26 xdd
*/ 

header("Content-Type: application/json");

["resultadoConsulta" => $consultaProlog] = include __DIR__."/../../../../service/PHP/Consultas-JSON/index.php";


const consulta = "swipl -s \"%s\" -g \"forall(estudiante(N,I,J), format('~w,~w,~w~n', [N,I,J]))\" -t halt | python3 %s";

$json = $consultaProlog(consulta);

echo($json);