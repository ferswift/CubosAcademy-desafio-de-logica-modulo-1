function solucao(min, km) {
  const kmPromo = km - 10 > 0 ? km - 10 : km - km;
  const minutoPromo = min - 20 > 0 ? min - 20 : min - min;
  const minutoPadrao = min - minutoPromo;
  const kmPadrao = km - kmPromo;
  const somaTotal =
    kmPromo * 50 + minutoPromo * 30 + minutoPadrao * 50 + kmPadrao * 70;

  console.log(Math.floor(somaTotal));
}

function processData(input) {
  const x = input.split(" ");
  const min = parseFloat(x[0], 10);
  const km = parseFloat(x[1], 10);
  solucao(min, km);
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
