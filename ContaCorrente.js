export class ContaCorrente{
    agen;
    saldo;

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
       
           
       

    
}