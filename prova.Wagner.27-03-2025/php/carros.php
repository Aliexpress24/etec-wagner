<?php

class Carro extends Veiculos{
    public static function Acelerar() {
        echo "carro está acelerando\n";
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

$carro1::Acelerar()

?>
 