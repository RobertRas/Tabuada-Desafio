export class Questao {
    n1
    n2
    resposta
    objeto  

    verificarResposta() {
        if(this.n1*this.n2 == this.resposta) 
        {
            return true
        } else{
            return false
        }
    }
}