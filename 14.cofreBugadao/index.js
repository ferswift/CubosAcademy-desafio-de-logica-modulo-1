function processData(input) {
  const valorDeEntrada = input.split("\n");
  const senhaCorreta = valorDeEntrada[0];
  let restanteDaSenha = valorDeEntrada[1];
  let senhaValidada = "SIM";

  for (const senha of senhaCorreta) {
    if (restanteDaSenha.includes(senha)) {
      restanteDaSenha = restanteDaSenha.slice(restanteDaSenha.indexOf(senha));
    } else {
      senhaValidada = "NAO";
    }
  }
  console.log(senhaValidada);
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
