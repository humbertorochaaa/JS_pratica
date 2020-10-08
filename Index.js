import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente01 = new Cliente();
const cliente02 = new Cliente();
const cliente03 = new Cliente();
const cliente04 = new Cliente();


const conta01 = new ContaCorrente();
conta01.cliente = cliente01;
conta01.agencia = 1501;
cliente01.nome = "Humberto";
cliente01.cpf = 12345678;

conta01.depositar(100);





const conta02 = new ContaCorrente();
conta02.cliente = cliente02;
conta02.agencia = 1701;
cliente02.nome = "Iasmim";
cliente02.cpf = 123589798;

conta02.depositar(250);




conta01.transferir(100, conta02);





console.log(conta01);
console.log(conta02);






 







