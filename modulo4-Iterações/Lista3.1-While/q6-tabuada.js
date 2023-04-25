//Escreva a tabuada dos números de 1 a 10.
function main() {
    let numero = 1

    while (numero <= 10) {
        let multiplicador = 1

        console.log(`\n------> TABUADA DO NUMERO ${numero} <-------`)

        while(multiplicador <= 10){
            console.log(`${numero} x ${multiplicador} = ${numero*multiplicador}`)
            multiplicador++
        }
        numero++
    }
}

main()