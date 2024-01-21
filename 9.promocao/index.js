function solucao(precos) {
  const somaTotal = precos.reduce((acumulador, preco) => acumulador + preco);
  if (precos.length <= 2) {
    console.log(somaTotal);
  } else {
    const menorValor = Math.min(...precos);
    const descontoNoMenorValor = menorValor * 0.5;
    console.log(somaTotal - descontoNoMenorValor);
  }
}

function processData(input) {
  const lista = input.split(" ");
  lista.forEach((x, i, a) => (a[i] = parseInt(x, 10)));
  solucao(lista);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
