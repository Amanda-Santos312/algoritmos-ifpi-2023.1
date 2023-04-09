import {question} from 'readline-sync'

function main() {
    const valor_base_hora_aula = Number(question('\nValor base da hora aula: '))

    const nome = question('\nNome: ')
    const horas_semanais = Number(question('Horas Semanais: '))
    const qualificacao = question('Qualificacao: E / M / D: ')
    const tempo_experiencia = Number(question('Tempo de Experiencia em Meses: '))
    const qtd_filhos = Number(question('Quantidade de Filhos Menores de 6 Anos: '))
    const valor_plano_de_saude = Number(question('Valor do Plano de Saude: '))

    const valor_hora = calcula_valor_hora(valor_base_hora_aula, horas_semanais)
    const salario_base_semanal = valor_base_hora_aula * horas_semanais  //**
    const salario_base_mensal = salario_base_semanal * 4.5

    const valor_qualificacao = verifica_qualificacao(qualificacao, salario_base_mensal)
    const experiencia = verifica_experiencia(tempo_experiencia, valor_qualificacao) //*
    const salario_base_mensal_final = calcula_valor_final_base(salario_base_mensal, valor_qualificacao, experiencia) //

    //Benefícios:
    const auxilio_creche = calcula_auxilio_creche(qtd_filhos)
    const ressarcimento_saude = calcula_ressarcimento(valor_plano_de_saude) //*
    const auxilio_combustivel = calcula_auxilio_combustivel(horas_semanais)

    const soma_beneficios = calcula_beneficios(auxilio_creche, ressarcimento_saude, auxilio_combustivel)

    const salario_bruto = calcula_salario_bruto(salario_base_mensal_final, soma_beneficios)

    //Descontos:
    const inss = verifica_desconto_inss(salario_base_mensal_final)
    const salario_mensal_sem_inss = valor_final_base_sem_inss(salario_base_mensal_final, inss)
    const ir = verifica_desconto_ir(salario_mensal_sem_inss)

    const descontos = soma_descontos(inss, ir)

    const salario_liquido = calcula_salario_liquido(salario_bruto, descontos)

    //Saída
    console.log(`\nProfessor(a): ${nome}`)
    console.log(`Valor hora: ${valor_hora.toFixed(2)}`)
    console.log(`Salario base semanal: ${salario_base_semanal.toFixed(2)}`)

    console.log(`\n======> GANHOS: <=====`)
    console.log(`Salario Base Mensal: ${salario_base_mensal_final.toFixed(2)}`)
    console.log(`Auxílio Creche: ${auxilio_creche.toFixed(2)}`)
    console.log(`Ressarcimento Saude ${ressarcimento_saude.toFixed(2)}`)
    console.log(`Auxílio Combustivel: ${auxilio_combustivel.toFixed(2)}`)
    console.log(`\nSalario Bruto: ${salario_bruto.toFixed(2)}`)

    console.log(`\n=====> DESCONTOS: <=====`)
    console.log(`Previdencia: ${inss}`)
    console.log(`Imposto de Renda: ${ir}`)
    console.log(`\nTotal de Descontos: ${descontos}`)
    console.log(`Salario Líquido: ${salario_liquido}`)
}

function calcula_valor_hora(valor_base_hora_aula, horas_semanais) {
    return valor_base_hora_aula / horas_semanais
}


function verifica_qualificacao(qualificacao, salario_base_mensal) {
    if (qualificacao === 'E'){
        return salario_base_mensal + (0.2 * salario_base_mensal)
    } else if (qualificacao === 'M') {
        return salario_base_mensal + (0.3 * salario_base_mensal)
    } else if (qualificacao === 'D') {
        return salario_base_mensal + (0.5 * salario_base_mensal)
    } else {
        return 0
    }
}


function verifica_experiencia(tempo_experiencia, salario_base_mensal) {
    const valor = 0.5 * salario_base_mensal
    
    if(tempo_experiencia > 6) {
        return (tempo_experiencia / 12) * valor
    } else {
        return 0
    }
}


function calcula_valor_final_base(salario_base_mensal, valor_qualificacao, experiencia) {
    return salario_base_mensal + valor_qualificacao + experiencia
}


function calcula_auxilio_creche(qtd_filhos) {
    return qtd_filhos * 700
}


function calcula_ressarcimento(valor_plano_de_saude) {
    if (valor_plano_de_saude <= 1000) {
        return 0.5 * valor_plano_de_saude
    } else {
        return 500
    }
}


function calcula_auxilio_combustivel(horas_semanais) {
    return horas_semanais * 3.75
}


function calcula_beneficios(auxilio_creche, ressarcimento_saude, auxilio_combustivel) {
    return (auxilio_creche + ressarcimento_saude + auxilio_combustivel)
}


function calcula_salario_bruto(salario_base_mensal_final, soma_beneficios) {
    return (salario_base_mensal_final + soma_beneficios)
}


function verifica_desconto_inss(salario_base_final) {
    if (salario_base_final <= 1320) {
        return salario_base_final - (salario_base_final * 0.075)
    } else if (salario_base_final <= 2500) {
        return salario_base_final - (salario_base_final * 0.09)
    } else if (salario_base_final <= 3900) {
        return salario_base_final - (salario_base_final * 0.12)
    } else if (salario_base_final <= 7500) {
        return salario_base_final - (salario_base_final * 0.14)
    } else {
        return salario_base_final - (salario_base_final * 0.16)
    }
}


function valor_final_base_sem_inss(salario_base_mensal_final, inss) {
    return (salario_base_mensal_final - inss)
}


function verifica_desconto_ir(salario_mensal_sem_inss) {
    if (salario_mensal_sem_inss <= 5000) {
        return 0
    } else {
        return 0.275 * (salario_mensal_sem_inss - 5000)
    }
}


function soma_descontos(inss, ir) {
    return (inss + ir)
}


function calcula_salario_liquido(salario_bruto, descontos) {
    return (salario_bruto - descontos)
}


main()