function solucao(lista) {
  let soma = 0;
  let dia = 0;
  for (let i = 0; i < lista.length; i++) {
    const elementoAtual = lista[i];
    soma += elementoAtual;
    dia++;
  }
  console.log(soma / dia);
}

function processData(input) {
  const strings = input.split(" ");
  const numeros = [];
  for (let i = 0; i < strings.length; i++) {
    numeros.push(parseInt(strings[i], 10));
  }
  solucao(numeros);
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
