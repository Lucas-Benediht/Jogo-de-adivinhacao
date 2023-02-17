let res = document.querySelector('section#resultado')
let computador = 0 
let jogador = 0

function sortear(){
    let minimo = 1
    let maximo = 100
    let diferenca = maximo - minimo
    let aleatorio = Math.random()
    computador = minimo + Math.trunc(diferenca * aleatorio)
}

function jogar(){
    jogador = Number(window.prompt('Qual o número você acha que é?'))
    if (jogador < computador) {  
        res.innerHTML += `<p> Você escolheu ${jogador} o meu número é:<strong>MAIOR</strong> que o seu. Tente novamente! 😜</p`
    }else if(jogador > computador) { 
        res.innerHTML += `<p> Você escolheu ${jogador} o meu número é:<strong>MENOR</strong> que o seu. Tente novamente! 😜</p`
    } else if (jogador == computador) {
        res.innerHTML +=`<p><strong> PARABENS!!!😍</strong> você adivinhou! Eu tinha sorteado o valor ${computador}!</p>`  
        document.getElementById('botao').style.visibility = 'hidden'
    }
} 