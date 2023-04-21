import {question} from "readline-sync";

function main() {
   //Valores Constantes: Preço do Argo e do Corolla Cross
   const valor_argo_fipe = 89000
   console.log(`Valor do argo na tabela FIPE: ${valor_argo_fipe}`)

   const valor_corolla_cross = 185000
   console.log(`Valor do Corolla Cross: ${valor_corolla_cross}`)

   const percentual_fipe = Number(question('\nPorcentagem da tabela FIPE do argo: '))
   const qtd_meses = Number(question('Vai parcelar em quantos meses:36, 48 ou 60? '))
   const taxa_juros = Number(question('Taxa de Juros de 1.2 a 2.5%: ')) //CDC
   const taxa_adm = Number(question('Taxa de administracao de 10 a 20%: ')) //CONSÓRCIO

   const entrada_lance = calcula_entrada(valor_argo_fipe, percentual_fipe)
   const valor_a_parcelar = verifica_valor_para_parcelar(valor_corolla_cross, entrada_lance)
   const juros_cdc = calcula_juros_cdc(valor_a_parcelar, taxa_juros, qtd_meses)
   const juros_consorcio = calcula_taxa_adm(valor_corolla_cross, taxa_adm) 

   const parcela_cdc = calcula_parcela(valor_a_parcelar+juros_cdc, qtd_meses) 
   const parcela_consorcio = calcula_parcela(valor_a_parcelar+juros_consorcio, qtd_meses) 

   const mais_vantajoso = verifica_mais_economico(parcela_cdc, parcela_consorcio)

   //Saída
   console.log(`\nValor do Bem: ${valor_corolla_cross}`)
   console.log(`Entrada: ${entrada_lance}`)
   console.log(`Valor a ser parcelado: ${valor_a_parcelar}`)

   console.log(`\n-------> CDC: <-------`)
   console.log(`Juros Totais: ${juros_cdc.toFixed(2)}`)
   console.log(`Parcelamento: ${qtd_meses} prestações de R$ ${parcela_cdc.toFixed(2)}`)
   
   console.log(`\n-------> CONSORCIO: <--------`)
   console.log(`Taxa de Administração: ${juros_consorcio.toFixed(2)}`)
   console.log(`Parcelamento: ${qtd_meses} prestações de R$ ${parcela_consorcio.toFixed(2)}`)

   console.log(`\n----> MELHOR ESCOLHA: <------- `)
   console.log(`----> ${mais_vantajoso}`)
}

function calcula_entrada(valor_argo_fipe, percentual_fipe) {
   return valor_argo_fipe * (percentual_fipe / 100)
}


function verifica_valor_para_parcelar(valor_corolla_cross, entrada) {
   return (valor_corolla_cross - entrada)
}


function calcula_juros_cdc(taxa_juros, valor_a_parcelar, qtd_meses) {
   return (taxa_juros / 100) * valor_a_parcelar * qtd_meses
}


function calcula_taxa_adm(valor_corolla_cross, taxa_adm) {
   return valor_corolla_cross * (taxa_adm / 100) 
}


function calcula_parcela(valor_a_parcelar, qtd_meses) {
   return (valor_a_parcelar / qtd_meses)
}


function verifica_mais_economico(parcela_cdc, parcela_consorcio) {
   if (parcela_cdc > parcela_consorcio) {
      return 'CONSÓRCIO'
   } else if (parcela_consorcio > parcela_cdc) {
      return 'CDC'
   } else {
      return 'CDC/Consórcio'
   }
}

main()