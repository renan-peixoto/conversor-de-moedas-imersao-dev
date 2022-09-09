function converter() {
  const valorDoElemento = document.getElementById("valor");
  const valor = valorDoElemento.value;
  const valorEmDolarNumerico = parseFloat(valor);
  const valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  
  // imprimir na tela
  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = `O valor em dólar é: ${valorEmReal}`;
  elementoValorConvertido.innerHTML = valorConvertido;
}