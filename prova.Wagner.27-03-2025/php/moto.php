<?php 
class Moto extends Veiculos{
    
    public static function Acelerar() {
        echo "moto está acelerando\n";
    }



}

$moto3 = new Moto('XJ6', 2000, 1000);

$moto3::Acelerar()


?>