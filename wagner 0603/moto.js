class Moto extends automoveis{
    constructor(modelo, ano, peso, bateria){
        super( modelo,ano, peso, bateria);  
        this.Fala()
    }
    
}
const Motos = new Moto('honda', 2019, 150, 'bateria com 12');

