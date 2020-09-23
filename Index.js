






const cliente01 = new Cliente();
const cliente02 = new Cliente();
const cliente03 = new Cliente();
const cliente04 = new Cliente();

const ContaCorrenteHumberto = new ContaCorrente();
ContaCorrenteHumberto.saldo = 0;
ContaCorrenteHumberto.agen = 001;
console.log(ContaCorrenteHumberto.saldo);
ContaCorrenteHumberto.depositar(100);
ContaCorrenteHumberto.depositar(100);
ContaCorrenteHumberto.depositar(-10);
console.log(ContaCorrenteHumberto.saldo);

ContaCorrenteHumberto.sacar(350);


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
