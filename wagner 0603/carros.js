class Carro extends automoveis{
    constructor(modelo, ano, peso, bateria){
        super(modelo, ano, peso, bateria);
        this.Fala()
}
    
}
const carros = new Carro ('ferrari', 2020, 1500, 'bateria com 90')