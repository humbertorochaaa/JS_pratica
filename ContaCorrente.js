 export class ContaCorrente{
    agencia;
    cliente; 
    
    
    
    
    saldo = 0;

    sacar(Valor){
        if (this.saldo >= Valor) {
            this.saldo += Valor;
            
        }
    }
  
    depositar(Valor){
        if (Valor >0) {
            this.saldo += Valor;
            
        }
    }
       
      transferir(valor, conta){
          const valorSacado = this.sacar(valor);
          conta.depositar(valorSacado);

      }     
       

    
}

