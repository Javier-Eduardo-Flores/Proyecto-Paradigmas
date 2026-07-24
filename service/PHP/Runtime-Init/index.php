<?php

$fixJson = fn($text) => str_replace("'", "\"", $text);
$environmentSetter = fn($consulta) => 
    $fixJson
    (
        shell_exec
        (
            sprintf
            (
                $consulta,
                __DIR__."/../../Python/runtime_manager.py",
                __DIR__."/../../../data-model/seed/db.pl.seed"
            )
        )
    );
     

return[
    "environmentSetter" => $environmentSetter
];

?>