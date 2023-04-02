import {question} from "readline-sync";


function main() {
   const valor_argo_fipe = 89000
   console.log(`Valor do argo na tabela FIPE: ${valor_argo_fipe}`)


   const valor_corolla_cross = 185000
   console.log(`Valor do Corolla Cross: ${valor_corolla_cross}`)


   const percentual_fipe = Number(question('\nPorcentagem da tabela FIPE do argo: '))
   const qtd_meses = Number(question('Vai parcelar em quantos meses:36,48 ou 60? '))
   const taxa_juros = Number(question('Taxa de Juros: '))
   const taxa_adm = Number(question('Taxa de administracao? '))




   const entrada = calcula_entrada(valor_argo_fipe, percentual_fipe)
   const valor_a_parcelar = verifica_valor_para_parcelar(valor_corolla_cross, entrada)


   console.log(`\nCDC: `)
   console.log(`Entrada: ${entrada}`)
   console.log(`Valor a ser parcelado: ${valor_a_parcelar}`)
   console.log(`Juros Totais: ${juros_totais}`)
   console.log(`Parcelamneto: ${parcelas}`)
   console.log(`Total a pagar: ${total_pagar}`)


   console.log(`\nCONSORCIO: `)
   console.log(`Entrada: ${entrada}`)
   console.log(`Valor a ser parcelado: ${valor_a_parcelar}`)
   console.log(`Juros Totais: ${juros_totais}`)
   console.log(`Parcelamneto: ${parcelas}`)
   console.log(`Total a pagar: ${total_pagar}`)
}


function calcula_entrada(valor_argo_fipe, percentual_fipe) {
   return valor_argo_fipe * (percentual_fipe / 100)


}


function verifica_valor_para_parcelar(valor_corolla_cross, entrada) {
   return (valor_corolla_cross - entrada)
}


main()

