 
 function contador() {
  var largura = document.getElementById("entrada").value.length;
  document.getElementById(
    "contador"
  ).innerHTML = `<p>Nº de Caracteres: ${largura}</p>`;
};

function upperCase() {
  var dados = document.getElementById("entrada").value.toUpperCase();
  // console.log(dados);
  document.getElementById("saida").innerText = dados;
}

function lowerCase() {
  var dados = document.getElementById("entrada").value.toLowerCase();
  document.getElementById("saida").innerText = dados;
}
