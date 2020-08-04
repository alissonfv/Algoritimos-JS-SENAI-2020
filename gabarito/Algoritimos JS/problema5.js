function velocidade_radar()
{
    var texto_velocidade_maxima = document.getElementById("texto_velocidade_maxima");
    var texto_velocidade_radar = document.getElementById("texto_velocidade_radar");
    var texto_resposta = document.getElementById("resposta");
    var velocidade_maxima = Number(texto_velocidade_maxima.value);
    var velocidade_radar = Number(texto_velocidade_radar.value);

    if(texto_velocidade_maxima.value==""||isNaN(velocidade_maxima) 
    ||texto_velocidade_radar.value==""||isNaN(velocidade_radar))
    {
        resposta.textContent = "Informe corretamente a velocidade..";
        return;
    }
    if(velocidade_maxima>=velocidade_radar)
    {
        resposta.textContent = "Sem Multa"
    }
    else if((velocidade_maxima*1.2)>=velocidade_radar)
    {
        resposta.textContent = "Multa Leve"
    }
    else
    {
        resposta.textContent ="Multa Grave"
    }
}
var verificar = document.getElementById("verificar");
verificar.addEventListener("click", velocidade_radar);