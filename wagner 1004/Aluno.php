<?php 
class Aluno extends Pessoa {
    
    public $curso;

    public function __construct($nome, $idade, $curso) {
        parent::__construct($nome, $idade);
        
        $this->curso = $curso;

}
public function apresentação ():string {
    return "Olá, meu nome é $this->nome, tenho $this->idade anos e estou cursando $this->curso.";
}
}
?>