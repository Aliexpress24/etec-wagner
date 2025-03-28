<?php
    class Veiculos{

        private $modelo;
        private $preco;
        private $estoque;
    
        public function __construct($modelo, $preco, $estoque) {
            $this->modelo = $modelo;
            $this->preco = $preco;
            $this->estoque = $estoque;
        }
    
        public function getModelo() {
            return $this->modelo;
        }
    
        public function setModelo($modelo) {
            $this->modelo = $modelo;
        }
    
        public function getPreco() {
            return $this->preco;
        }
    
        public function setPreco($preco) {
            if ($preco >= 0) {
                $this->preco = $preco;
            } else {
                echo "O preço é inválido\n";
            }
        }
    
        public function getEstoque() {
            return $this->estoque;
        }
    
        public function setEstoque($estoque) {
            if ($estoque >= 0) {
                $this->estoque = $estoque;
            } else {
                echo "O estoque é inválido\n";
            }
        }

        public function Acelerar(){
            echo "O Veiculo está acelerando\n";
        }


    }


?>