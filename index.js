import rl from 'readline-sync';

console.log("\nAplicação de Juros: \n")

let divida = rl.question("Informe o valor devido: R$ ")


if (divida > 0) {
  
  let dias = rl.question("Informe quantos dias se passaram desde o vencimento do boleto: ")

  let taxaJuros
  let valorTotal

  if (dias > 0 && dias < 15) {
    taxaJuros = 0.05
    valorTotal = (taxaJuros * Number(divida)) + Number(divida)
    console.log("\nValor original da dívida: R$ "+divida)
    console.log("Dias em atraso: "+dias)
    console.log("Taxa de juros: "+(taxaJuros * 100)+"%")
    console.log("Valor total com juros: R$ "+valorTotal)
  } 
  else if (dias > 15) {
    taxaJuros = 0.10
    valorTotal = (taxaJuros * Number(divida)) + Number(divida)
    console.log("\nValor original da dívida: R$ "+divida)
    console.log("Dias em atraso: "+dias)
    console.log("Taxa de juros: "+(taxaJuros * 100)+"%")
    console.log("Valor total com juros: R$ "+valorTotal)
  } 
  else {
    console.log("Você está em dia!")
  }
} else {
  console.log("O valor da divida deve ser maior que zero!")
}