//Sábado(22/04) 8:40 - 9:45

import {mostrar_texto, obter_numero_positivo} from './input-utils.js'

function main() {
    mostrar_texto('\n------> MANDA ENERGIA <------')

    const leitura_atual = obter_numero_positivo('\nLeitura Atual: ')
    const leitura_anterior = obter_numero_positivo('Leitura Anterior: ')

    const consumo = calcula_consumo(leitura_atual, leitura_anterior)
    
    const tarifa_consumo = calcula_valor(consumo)
    
    const tarifa_bandeira = calcula_bandeira(consumo)

    const icms = calcula_icms(tarifa_consumo)

    const pis_confis = calcula_pis_confis(tarifa_consumo)

    const iluminacao = calcula_iluminacao(consumo, tarifa_consumo)

    const valor_a_pagar = valor_conta(tarifa_consumo, tarifa_bandeira, icms, pis_confis)

    mostrar_texto(`\nConsumo: ${consumo} KWh`)
    mostrar_texto(`Tarifa: ${tarifa_consumo} reais`)
    mostrar_texto(`Valor da Bandeira: ${tarifa_bandeira} reais`)
    mostrar_texto(`ICMS: ${icms}`)
    mostrar_texto(`PIS/CONFIS: ${pis_confis}`)
    mostrar_texto(`Taxa de iluminação: ${iluminacao.toFixed(2)}`)
    mostrar_texto(`Valor da Conta: ${valor_a_pagar.toFixed(2)} reais`)
}


function calcula_consumo(leitura_atual, leitura_anterior) {
    return leitura_atual - leitura_anterior
}


function calcula_valor(consumo) {
    if(consumo <= 30) {
        return 0
    } else if (consumo <= 100) {
        return consumo * 0.59
    } else {
        return consumo * 0.75
    }
}


function calcula_bandeira(consumo) {
    const valor = Math.floor(consumo / 100)
    const resultado = valor * 8
    return resultado 
    
}


function calcula_icms(tarifa_consumo) {
    return 0.25 * tarifa_consumo
}


function calcula_pis_confis(tarifa_consumo) {
    return 0.15 * tarifa_consumo
}


function calcula_iluminacao(consumo, tarifa_consumo) {
    if (consumo >= 80) {
        return 0.06 * tarifa_consumo
    }
}


function valor_conta(tarifa_consumo, tarifa_bandeira, icms, pis_confis) {
    return (tarifa_consumo + tarifa_bandeira + icms + pis_confis)
}

main()