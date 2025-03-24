class pessoa{
    #nome;
    idade;
    CPF;

    constructor(nome, idade, CPF){
        this.#nome = nome;
        this.idade = idade;
        this.CPF = CPF;
        
    }

    getNome(){
        return this.#nome;
    }

    fala (){
        console.log(`Olá, meu nome é ${this.#nome} estou estudando ${this.curso} e tenho ${this.idade} de idade`)
    }
}











