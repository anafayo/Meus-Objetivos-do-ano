const botoes = document.querySelectorAll("botao");
const textos = document.querySelectorAll(" .aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function() {
     
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
        }
        
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }
}
        
cont contadores = codument.querySelectorAll("contador");
const tempoObjetivo1 = new Date("2025-10-05T00:00>00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal1 = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000 );
    let minutos = Math.floor(segundosa / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %=24;

    return dias + " dias " + horas + " horas " " + minutos + "
   minutos " + segundos + " segundos ";
}