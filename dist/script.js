function converterDolar() {
  const valorDoElemento = document.getElementById("valorDolar");
  const valor = valorDoElemento.value;
  const valorEmDolarNumerico = parseFloat(valor);
  const valorEmReal = valorEmDolarNumerico * 5.15;
  console.log(valorEmReal);
  
  // imprimir na tela
  const elementoValorConvertido = document.getElementById("valorConvertidoDolar");
  const valorConvertido = `O valor em dólar é: US$ ${valorEmReal}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEuro() {
  const valorDoElemento = document.getElementById("valorEuro");
  const valor = valorDoElemento.value;
  const valorEmDolarNumerico = parseFloat(valor);
  const valorEmReal = valorEmDolarNumerico * 5.17;
  console.log(valorEmReal);
  
  // imprimir na tela
  const elementoValorConvertido = document.getElementById("valorConvertidoEuro");
  const valorConvertido = `O valor em uro é: ${valorEmReal} €`;
  elementoValorConvertido.innerHTML = valorConvertido;
}