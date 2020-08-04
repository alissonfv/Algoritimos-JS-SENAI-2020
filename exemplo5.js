function calcular()
{
 var txtnome = document.getElementById("txtnome");
 var txtidade = document.getElementById("txtidade");
 var rbEnf = document.getElementById("rbenf");
 var rbApt = document.getElementById("rbapt");
 var resposta = document.getElementById("resposta")
 var valorTotal = 0;
 var nome = txtnome.value;
 var enf = rbEnf.checked;
 var apt = rbApt.checked;
 var idade = parseInt(txtidade.value)

 if (nome=="" || (enf==false && apt==false)) // || = OU , && = E
 {
 alert("Por favor, selecione o nome e o tipo de plano!");
 txtnome.focus();
 return;
 }
 if (idade<0 || isNaN(idade)==true)
 {
 alert("Por favor, informe a idade corretamente...")
 txtidade.focus();
 return;
 }if (idade>=0 && idade <=30)
 {
 valorTotal=500;
 }
 else if (idade>=31 && idade <=64)
 {
 valorTotal=1000;
 }
 else
 {
 valorTotal = 1500;
 }
 if (apt==true)
 {
 valorTotal = valorTotal + 300;
 }
 const valor_formatado = valorTotal.toLocaleString('pt-BR',{style:'currency',
currency:'BRL'});
 resposta.textContent = `Valor total do plano de saúde ${valor_formatado}`;
 resposta.style.color = "blue";
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcular);