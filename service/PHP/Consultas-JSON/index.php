<?php

$fixJson = fn($text) => str_replace("'", "\"", $text);

$consultaProlog = fn($consulta) => 
    
    $fixJson(
        shell_exec(
            sprintf(
                $consulta,
                __DIR__."/../../../data-model/db.pl",
                __DIR__."/../../Python/prolog_response_manager.py"
            )
        )
    );

return[
    "resultadoConsulta" => $consultaProlog
];