<?php

class Carro {
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
            echo "O preço é inválido, pois está negativo.\n";
        }
    }

    public function getEstoque() {
        return $this->estoque;
    }

    public function setEstoque($estoque) {
        if ($estoque >= 0) {
            $this->estoque = $estoque;
        } else {
            echo "O estoque é inválido, pois está negativo.\n";
        }
    }
}

$carro1 = new Carro('Fusca', 25000, 10);
$carro2 = new Carro('Civic', 120000, 5);

echo "<script>console.log('Modelo: " . $carro1->getModelo() . ", Preço: R$ " . $carro1->getPreco() . ", Estoque: " . $carro1->getEstoque() . "');</script>";
echo "<script>console.log('Modelo: " . $carro2->getModelo() . ", Preço: R$ " . $carro2->getPreco() . ", Estoque: " . $carro2->getEstoque() . "');</script>";

$carro1->setPreco(24000);
$carro1->setEstoque(12);

echo "<script>console.log('Novo preço do " . $carro1->getModelo() . ": R$ " . $carro1->getPreco() . "');</script>";
echo "<script>console.log('Novo estoque do " . $carro1->getModelo() . ": " . $carro1->getEstoque() . "');</script>";

?>
