class Moto extends Veiculos{
    
    fazerSom() {
        console.log ("moto está acelerando ")
    }
}
const moto1 = new Moto('BMW', 25000, 10);
const moto2 = new Moto('XJ6', 120000, 5);
const moto3= new Moto ('1200', 350000, 0)



console.log(`Modelo: ${moto1.getModelo()}, Preço: R$ ${moto1.getPreco()}, Estoque: ${moto1.getEstoque()}`);
console.log(`Modelo: ${moto2.getModelo()}, Preço: R$ ${moto2.getPreco()}, Estoque: ${moto2.getEstoque()}`);
console.log(`Modelo: ${moto3.getModelo()}, Preço: R$ ${moto3.getPreco()}, Estoque: ${moto3.getEstoque()}`);


moto1.setPreco(24000);
moto1.setEstoque(12);

console.log(`Novo preço do ${moto1.getModelo()}: R$ ${moto1.getPreco()}`);
console.log(`Novo estoque do ${moto1.getModelo()}: ${moto1.getEstoque()}`);

moto1.fazerSom()
