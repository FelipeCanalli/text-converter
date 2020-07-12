function contador() {
  // função de contar
  var texto = document.getElementById("entrada").value;
  document.getElementById(
    "contador"
  ).innerHTML = `<p>Nº de Caracteres: ${texto.length}</p>`;
  // passando o texto da textarea entrada para a outra textarea
  // document.getElementById("saida").innerHTML = `${texto}`;
}

function upperCase() {
  var dados = document.getElementById("entrada").value.toUpperCase();
  // console.log(dados);
  document.getElementById("saida").innerHTML = `${dados}`;
}

function lowerCase() {
  var dados = document.getElementById("entrada").value.toLowerCase();
  // Utilizando innerHTML e ` ` para respeitar os espaços
  document.getElementById("saida").innerHTML = `${dados}`;
}

function capitalizeFisrtLetter() {
  var dados = document.getElementById("entrada").value;
  var dados = dados.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
  document.getElementById("saida").innerHTML = `${dados}`;
}
