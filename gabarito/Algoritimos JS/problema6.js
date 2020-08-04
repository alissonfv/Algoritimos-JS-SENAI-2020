function notasContadas()
{
    var notasCem= document.getElementById("notas_cem");
    var notasCinquenta = document.getElementById("notas_cinquenta");
    var notasDez = document.getElementById("notas_dez");
    var textoSanque = document.getElementById("texto_saque");
    var saque = Number(textoSanque.value);

    if (saque == 0 || isNaN(saque)) {
        alert("Informe um valor adequado:(R$ 10, 50, 100)");                         
        return;
    }
    if (saque % 10 != 0) {
        alert("Informe um valor adequado:(R$ 10, 50, 100)");
        return;
    }

    var totalNotasCem = Math.floor(saque/100);
    var resto = saque % 100;
    var totalNotasCinquenta =Math.floor(resto / 50);
    resto = resto % 50;
    var totalNotasDez = Math.floor(resto / 10);

    if (totalNotasCem > 0) {
        notasCem.textContent = "Total de notas de R$ 100: " + totalNotasCem;
      }
      if (totalNotasCinquenta > 0) {
        notasCinquenta.textContent = "Total de notas de R$ 50: " + totalNotasCinquenta;
      }
      if (totalNotasDez > 0) {
        notasDez.textContent = "Total de notas de R$ 10: " + totalNotasDez;
      }
}
var mostrar_notas = document.getElementById("mostrar_notas");
mostrar_notas.addEventListener("click", notasContadas);