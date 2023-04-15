/* Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu número de identificação e seu peso.
Escreva um algoritmo que leia um conjunto de cartões e escreva o número de identificação e o peso do boi mais magro e do boi mais gordo.
(Flag: número de identificação = 0) */
import {question} from 'readline-sync'

function main() { 
    //Estado inicial
    let id = Number(question('ID: '))
    let peso
    let id_menor
    let id_maior
    let peso_menor
    let peso_maior
    
    while (id != 0) { //Condição de continuidade
        //Trabalho
        peso = Number(question('Peso(@): '))
        id = Number(question('ID: '))
        if (peso < peso_menor) {
            peso_menor = peso
            id_menor = id
        } 

        if (peso > peso_maior) {
            peso_maior = peso
            id_maior = id
        }
    }
    console.log(`\nId ${id_menor} tem o Menor Peso ${peso_menor}`)
    console.log(`Id ${id_maior} tem o Maior Peso ${peso_maior}`)
    
}
main()