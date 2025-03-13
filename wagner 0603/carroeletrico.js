class eletricos extends automoveis{
    constructor(modelo, ano, peso, baterias){
        super(modelo, ano, peso, baterias)
        this.Fala()
    }
    
}
const eletrico = new eletricos('Tesla', 2020, 1500, 'com 400');
