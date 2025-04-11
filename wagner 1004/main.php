<?php  
include_once 'Pessoa.php';
include_once 'Professor.php';
include_once 'Aluno.php';

$professor1 = new Professor('Felipe', '34', 'Desenvolvimento de Sistemas');
$aluno1 = new Aluno('João', '25', 'Desenvolvimento de Sistemas',); 
echo $professor1 -> apresentar();
echo $aluno1 -> apresentação();

?>