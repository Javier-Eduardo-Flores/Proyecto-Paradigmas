<?php 

["environmentSetter" => $environmentSetter] = include __DIR__."/../../../../service/PHP/Runtime-Init/index.php";

const consulta = "python3 %s %s";


echo $environmentSetter(consulta);


?>