<?php
/*
 * @author jose.inestroza@unah.edu.hn
 * @author Machigua
 * @version 0.1.1
 * @date 26/06/29
 * @since 26/06/25
 * 
 * 
Endpoint encargado de mandar la consulta sobre los estudiantes a Prolog, valiendose del servicio
Consultas-JSON

*/ 

header("Content-Type: application/json");

["resultadoConsulta" => $consultaProlog] = include __DIR__."/../../../../service/PHP/Consultas-JSON/index.php";


const consulta = "swipl -s \"%s\" -g \"forall(estudiante(N,I,J), format('~w,~w,~w~n', [N,I,J]))\" -t halt | python3 %s Estudiantes Nombre,Cuenta,Correo";

$json = $consultaProlog(consulta);

echo($json);