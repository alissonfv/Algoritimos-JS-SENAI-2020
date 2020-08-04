function verificar_triangulo(){
    var anguloAlfa = document.getElementById("txt_alfa");
    var anguloBeta = document.getElementById("txt_beta");
    var anguloGama = document.getElementById("txt_gama");
    var resposta = document.getElementById("resposta");

    var alfa = Number(anguloAlfa.value);
    var beta = Number(anguloBeta.value);
    var gama = Number(anguloGama.value);
    var somaAngulos = alfa+beta+gama
 
    var res = document.querySelector('div#imagem');
    res.style.textAlign = 'center';
    var img =document.createElement('img');
    img.setAttribute('id', 'triangulo');
    img.setAttribute('width', 400);
    img.setAttribute('height', 300);

    if(somaAngulos %180 !=0 || alfa==""|| beta=="" || gama==""|| alfa < 1||beta < 1||gama < 1)
    {
        resposta.textContent ="Os ângulos não podem formar um triângulo. Eles devem soma 180°.";
        res.innerHTML="";
        return;
    }
    if(alfa ==90 || beta==90|| gama==90)
    {
        resposta.textContent="Os ângulos internos podem formar um triângulo.";
        img.setAttribute('src', 'img/triangulo_retangulo.jpg');
        res.innerHTML ="<p>Tipo: Retângulo</p>";
       
    }
    else if(alfa <90 && beta<90 && gama<90)
    {
        resposta.textContent="Os ângulos internos podem formar um triângulo.";
        img.setAttribute('src', 'img/triangulo_acutangulo.jpg');
        res.innerHTML ="<p>Tipo: Acutângulo</p>";
        
    }
    else if(alfa >90 || beta>90|| gama>90){
        resposta.textContent="Os ângulos internos podem formar um triângulo.";
        img.setAttribute('src', 'img/triangulo_obtusangulo.jpg');
        res.innerHTML ="<p>Tipo: Obtusângulo</p>";
       
    }
    res.appendChild(img);
}
var verificar = document.getElementById("bt_verificar");
verificar.addEventListener("click", verificar_triangulo);