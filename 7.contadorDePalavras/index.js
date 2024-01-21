function solucao(texto) {
  texto = texto.trim();

  let palavras = texto.split(/\s+/);

  if (palavras.includes("")) {
    palavras.splice(palavras.indexOf(""), 1);
  }

  console.log(palavras.length);
}

function processData(input) {
  solucao(input);
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
