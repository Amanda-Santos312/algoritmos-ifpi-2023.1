/* Leia 4 numeros correspondente às notas de um aluno. 
Calcule a média com os pesos 2, 3, 4 e 1 respectivamente e mostre, 
se a media for maior ou igual a 7.0, imprima "Aluno Aprovado", 
se a média for inferior a 5.0 imprima "Aluno reprovado" e 
se a média ficar entre 5.0 e 6.9 imprimir "Aluno em exame" e 
peça a nota do exame e recalcule com a nota da média e divida por 2, 
se o valor da nova média for maior que 5.0, retorne "Aluno aprovado" se não, mostre "Aluno reprovado".*/
//import {obter_numero_positivo, mostrar_texto}  from '../../io_utils.js'
import {mostar_texto, obter_numero_positivo} from '../../io_utils.js'

function main() {
    const notas = mostar_texto('').split(' ').map(Number)

    mostar_texto(notas)
    
    
}

main()