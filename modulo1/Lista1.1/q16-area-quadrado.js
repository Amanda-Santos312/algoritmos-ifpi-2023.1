//Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado²)

function main () {
    //Entrada
    const lado = Number(input('Valor para o lado do quadrado: '))

    //Proessamento
    const area = lado**2

    //Saída
    console.log(`A área do quadrado é de ${area}cm²`)
}
main()