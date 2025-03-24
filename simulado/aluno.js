class aluno extends pessoa {
     matricula;
    curso;

    constructor(nome, idade, CPF, matricula, curso) {
        super(nome, idade, CPF);
        this.matricula = matricula;
        this.curso = curso

        
}

}

aluno1 = new aluno ("João", 20, "123.456.789-51", "123456", "Engenharia ");
aluno2 = new aluno ("Maria", 22, "987.654.321-42", "987654", "Administração");
aluno3 = new aluno ("Pedro", 21, "875.426.041-57", "512561", "Ciências");
aluno4 = new aluno ("Luiza", 23, "426.078.138-40", "631323", "Artes");
aluno5 = new aluno ("rafael" , 24, "749.840.987-31", "712351", "Direito");

aluno1.fala();
aluno2.fala()
aluno3.fala()
aluno4.fala ()   
aluno5.fala()

