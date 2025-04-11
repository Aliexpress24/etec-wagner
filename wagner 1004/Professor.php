<?php

class Professor extends Pessoa{
    private $especialidade;

    function __construct($nome, $idade, $especialidade){
        parent::__construct($nome, $idade);

        $this -> $especialidade = $especialidade;
}
public function apresentar(): string{
    return "Olá, sou o professor $this->nome, tenho $this->idade anos e sou especialista em $this->especialidade.";
}
  }
?>