function solucao(carta) {
  let cartaMaisForte = "";

  if (carta === "Q") {
    cartaMaisForte = "J";
  } else if (carta === "J") {
    cartaMaisForte = "K";
  } else if (carta === "K") {
    cartaMaisForte = "A";
  } else if (carta === "A") {
    cartaMaisForte = "2";
  } else if (carta === "2") {
    cartaMaisForte = "3";
  } else if (carta === "3") {
    cartaMaisForte = "Q";
  } else {
    console.log("Valor invalido");
  }
  console.log(cartaMaisForte);
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
