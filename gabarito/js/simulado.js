var vet_avai = [];       // declara vetor global
var vet_fig = [];         // declara vetor global

function adicionarJogo() {
  // referencia elementos de entrada e obtém conteúdo 
  var inAvai = document.getElementById("inAvai");
  var gols_avai = inAvai.value;

  // referencia elementos de entrada e obtém conteúdo 
  var inFigueirense = document.getElementById("inFigueirense");
  var gols_figueirense = inFigueirense.value;

  // verifica preenchimento da quantidade de gols do Avaí
  if (gols_avai == "" || gols_avai>9 || gols_avai<0) {
    alert("Quantidade de gols inválida para o Avaí!");
    inAvai.focus();
    return;
  }

  // verifica preenchimento da quantidade de gols do Figueirense
  if (gols_figueirense == "" || gols_figueirense>9 || gols_figueirense<0) {
    alert("Quantidade de gols inválida para o Figueirense!");
    inFigueirense.focus();
    return;
  }

  vet_avai.push(gols_avai);           // adiciona a quantidade de gols no final do vetor
  vet_fig.push(gols_figueirense);    // adiciona a quantidade de gols no final do vetor

  listarJogos();       // chama function listarJogos()

  // limpa campo e posiciona cursor em inAvai
  inAvai.value = "";
  inFigueirense.value = "";
  inAvai.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarJogo);

function listarJogos() {
  // verifica se vetor com a qtd de gols está vazio 
  if (vet_avai.length == 0) {
    alert("Não há jogos na lista...");
    inAvai.focus();
    return;
  }

  var lista = "";          // string para concatenar jogos

  // percorre os elementos do vetor 
  for (i = 0; i < vet_avai.length; i++) {
    lista += "Jogo " + (i + 1) + " (Avaí x Figueirense): " + vet_avai[i] + " x " + vet_fig[i] + "\n";
  }

  // altera o conteúdo da tag outLista
  document.getElementById("outLista").textContent = lista;
}

function montarEstat() {

  //obtém a quantidade de itens do vetor vet_avai
  var tam = vet_avai.length;
  var ultimo = tam - 1;

  // verifica se vetor clubes está vazio ou tamanho ímpar
  if (tam == 0) {
    alert("Não há jogos!");
    inAvai.focus();
    return;
  }

  // declara variáveis utilizadas para as estatísticas
  var empates =0;
  var vitorias_avai=0;
  var vitorias_figueirense = 0;
  var saldo_avai= 0 ;
  var saldo_figueirense= 0;

  
  // percorre os elementos do vetor 
  for (i = 0; i < tam; i++) {
   
    if (vet_avai[i]==vet_fig[i])  //Verifica empates e conta
    {
      empates++
    }
    else if (vet_avai[i]>vet_fig[i])  //Verifica vitórias do Avaí e conta
    {
      vitorias_avai++
    }
    else 
    {
      vitorias_figueirense++ //Verifica vitórias do Figueirense e conta
    }

    //Calcula Saldo de Gols do Avaí e do Figueirense
    saldo_avai += vet_avai[i]-vet_fig[i]
    saldo_figueirense += vet_fig[i]-vet_avai[i]
  }

  //Monta string com as estatísticas
  var texto = "Quantidade de vitórias do Avaí: " + vitorias_avai + "\n";
  texto +=  "Quantidade de vitórias do Figueirense: " + vitorias_figueirense + "\n";
  texto +=  "Quantidade de empates: " + empates + "\n";
  texto +=  "Saldo de gols do Avaí: " + saldo_avai + "\n";
  texto +=  "Saldo de gols do Figueirense: " + saldo_figueirense;


  // altera o conteúdo da tag outLista e mostra resultado
  document.getElementById("outLista").textContent += "\n\n" + texto;
}
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarEstat);