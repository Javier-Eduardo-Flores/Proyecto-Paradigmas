<?php
/**
 * @author jose.inestroza@unah.edu.hn
 * @version 0.1.1
 * @date 26/06/29
 * @since 26/06/25
 * 
 * Version modificada para que ejecute la accion de limpiar la base de datos
 * @author carlos.machigua@unah.hn
 * @date 26/07/22
 */

$fixJson = fn($text) => str_replace("'", "\"", $text);

$dbClearing = fn($consulta) => 
    $fixJson
    (
        shell_exec
        (
            sprintf
            (
                $consulta,
                __DIR__."/../../Python/db_clear_manager.py",
                "/tmp/proyecto-paradigmas-equipo4/runtime/db.pl"
            )
        )
    );
     

return[
    "dbClearing" => $dbClearing
];