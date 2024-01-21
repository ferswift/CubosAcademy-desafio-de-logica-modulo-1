function solucao(jogadores) {
  let soma1 = [];
  let soma0 = [];

  for (const numero of jogadores) {
    if (numero.jogada == 1) {
      soma1.push(numero.nome);
    } else {
      soma0.push(numero.nome);
    }
  }

  if (soma1.length === 1) {
    console.log(soma1.toString());
  } else if (soma0.length === 1) {
    console.log(soma0.toString());
  } else {
    console.log("NINGUEM");
  }
}

function processData(input) {
  solucao(JSON.parse(input));
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
