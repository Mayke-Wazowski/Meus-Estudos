class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    #saldo = 0;
    
    //metodos da classe
    sacar(valor){
        if (this.#saldo >= valor){
            this.#saldo -= valor;
        }
    }
    //metodos da classe
        depositar(valor){
            if(valor> 0){
                this.#saldo += valor;
               console.log(this.#saldo) 
            }
        } 
         
    }

/*================================================*/

//novas instancias com as chamadas de atributos da classe clinte
const cliente1 = new Cliente();
cliente1.nome = "Mayke";
cliente1.cpf = "11122233300";

const cliente2 = new Cliente()
cliente2.nome = "Alice";
cliente2.cpf  = "11122233325";

/*================================================*/

// novas instacnias com a classe de Conta Corrente
const contaCorrenteRicardo = new ContaCorrente();
 contaCorrenteRicardo.agencia = 1001;

 
 contaCorrenteRicardo.depositar(100);
 contaCorrenteRicardo.sacar(50);

 console.log(contaCorrenteRicardo);

