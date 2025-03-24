class professor extends pessoa{
    #matricula;
    disciplina;

    constructor(nome, idade, CPF, disciplina, matricula){
        super(nome, idade, CPF);
        this.disciplina = disciplina;
        this.#matricula = matricula;
    }
}
professor1 = new professor ("João", 30, "123.456.789-43", "Matemática", 12345 );
professor2 = new professor ("Maria", 25, "987.654.321-51", "Física", 67890 );
professor3 = new professor ("Pedro", 35, "952.405.292-63", "Química", 54321 );
professor4 = new professor ("Ana", 20, "123.456.789-43", "Biologia", 98765 );