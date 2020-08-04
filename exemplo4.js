function calcular_media()
{
 var nome = document.getElementById("txtnome").value;
 var nota1 = document.getElementById("txtnota1").value;
 var nota2 = document.getElementById("txtnota2").value;
 var texto_media = document.getElementById("media");
 var texto_situacao = document.getElementById("situacao");
 var media = (Number(nota1) + Number(nota2)) /2;
 texto_media.textContent = "Média das notas:" + media.toFixed(1);
 if (media >=6)
 {
 texto_situacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)!";
 texto_situacao.style.color = "blue";
 }
 else
 {
 if (media>=4)
 {
 texto_situacao.textContent = "Ops " + nome + "... Você está em exame!";
 texto_situacao.style.color = "green";
 }
 else
 {
 texto_situacao.textContent = "Ops " + nome + "... Você foi reprovado(a)!";
 texto_situacao.style.color = "red";
 }
 }
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcular_media);
