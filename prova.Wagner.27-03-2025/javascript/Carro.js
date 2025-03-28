class Carro extends Veiculos{
    fazerSom() {
        console.log("carro está acelerando");
    }
}




const carro1 = new Carro('Fusca', 25000, 10);
const carro2 = new Carro('Civic', 120000, 5);
const carro3= new Carro ('Corolla', 350000, 0)



console.log(`Modelo: ${carro1.getModelo()}, Preço: R$ ${carro1.getPreco()}, Estoque: ${carro1.getEstoque()}`);
console.log(`Modelo: ${carro2.getModelo()}, Preço: R$ ${carro2.getPreco()}, Estoque: ${carro2.getEstoque()}`);
console.log(`Modelo: ${carro3.getModelo()}, Preço: R$ ${carro3.getPreco()}, Estoque: ${carro3.getEstoque()}`);


carro1.setPreco(24000);
carro1.setEstoque(12);

console.log(`Novo preço do ${carro1.getModelo()}: R$ ${carro1.getPreco()}`);
console.log(`Novo estoque do ${carro1.getModelo()}: ${carro1.getEstoque()}`);

carro1.fazerSom()

