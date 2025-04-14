<?php
include_once("./model/Aluno.php");
$pascal = new Aluno("Blaze Pascal", 50);
echo json_encode($pascal);
?>