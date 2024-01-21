function solucao(numeros) {
  const resultado = numeros.reduce((acumulador, numero) => acumulador + numero);
  const quantidadeDeJogadores = numeros.length;
  const goleiro = resultado % quantidadeDeJogadores;

  if (goleiro === 0) {
    console.log(numeros.length);
  } else {
    console.log(goleiro);
  }
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
