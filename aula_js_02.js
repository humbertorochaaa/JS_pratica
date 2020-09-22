class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agen;
    saldo;

    sacar(Valor){
        if(this.saldo >= Valor){
            this.saldo -= Valor;
        }
        

    }
}




const cliente01 = new Cliente();
const cliente02 = new Cliente();
const cliente03 = new Cliente();
const cliente04 = new Cliente();

const ContaCorrenteHumberto = new ContaCorrente();
ContaCorrenteHumberto.saldo = 0;
ContaCorrenteHumberto.agen = 001;
console.log(ContaCorrenteHumberto.saldo);

ContaCorrenteHumberto.saldo = 100;
console.log(ContaCorrenteHumberto.saldo);

ContaCorrenteHumberto.sacar(50);


console.log(ContaCorrenteHumberto.saldo);



 cliente01.nome = "Humberto";
 cliente01.cpf = 1234567890;



 

 cliente02.nome = "Iasmim";
 cliente02.cpf = 987654321;



 cliente03.nome = "Geraldo";
 cliente03.cpf = 987654320;


 cliente04.nome = "Manoel";
 cliente04.cpf = 987657321;





console.log(cliente01,);
console.log();
