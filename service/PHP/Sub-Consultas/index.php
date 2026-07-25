<?php
/**
 * DOM: Document Object Model
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.1
 * @date 26/06/29
 * @since 26/06/25
 * 
 */

$fixJson = fn($text) => str_replace("'", "\"", $text);

$consultaProlog = fn($consulta) => 
    
    $fixJson(
        shell_exec(
            sprintf(
                $consulta,
                "/tmp/proyecto-paradigmas-equipo4/runtime/db.pl",
                __DIR__."/../../Prolog/Reglas/reglas.pl",
                __DIR__."/../../Python/prolog_response_manager.py"
            )
        )
    );

return[
    "resultadoConsulta" => $consultaProlog
];