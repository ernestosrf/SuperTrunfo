var cartas = [
    carta1 = {
        nome: "Bulbassauro",
        atributos: {
         ataque: 92,
         defesa: 92,
         hp: 200
  }
    },
    carta2 = {
        nome: "Charmander",
        atributos: {
         ataque: 98,
         defesa: 81,
         hp: 188
  }
    },
    carta3 = {
        nome: "Pikachu",
        atributos: {
         ataque: 103,
         defesa: 76,
         hp: 180
  }
    }
]

var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random()*3)
    cartaMaquina = cartas[numeroCartaMaquina]
    console.log(cartaMaquina)
    var numeroCartaJogador = parseInt(Math.random()*3)
    while (numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random()*3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes()
}


function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto
}