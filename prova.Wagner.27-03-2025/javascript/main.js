class Veiculos{
    
    
    #modelo;
    #preco;
    #estoque;

    
    constructor(modelo, preco, estoque){


        this.#modelo = modelo;
        this.#preco = preco;
        this.#estoque = estoque;
    }

    
    getModelo(){
        return this.#modelo;
    }

    
    setModelo(modelo){
        this.#modelo = modelo;
    }

    
    getPreco(){
        return this.#preco;
    }

    
    setPreco(preco){
        if(preco >= 0) {
            this.#preco = preco;
        }
        else {
            console.log("O preço e invalido, Pois esta negativo.");
        }
    }
    
    getEstoque(){
        return this.#estoque;
    }

    
    setEstoque(estoque){
        if(estoque >= 0){
            this.#estoque = estoque;
        }
        else {
            console.log("O estoque e invalido, Pois esta negativo.");
    }
}
fazerSom() {
    console.log("veículo está acelerando");
}
}