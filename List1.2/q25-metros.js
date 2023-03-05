//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
import {input} from '../io_utils.js'

function main() {
    //Entrada
    const m = Number(input('Valor para metros: '))

    //Processamento
    const km = Math.floor(m / 1000)
    const metros = m % 1000
   
    //Saída
    console.log(`${km}km e ${metros}m`)
}
main()
/* KM:
Pego a parte inteira da divisão do número por 1000;
   M:
Vai ser o resto da divisão do número por 1000 */