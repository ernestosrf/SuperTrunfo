var cartas = [
    carta1 = {
        nome: "Bulbassauro",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png", 
        atributos: {
         ataque: 92,
         defesa: 92,
         hp: 200
  }
    },
    carta2 = {
        nome: "Charmander",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        atributos: {
         ataque: 98,
         defesa: 81,
         hp: 188
  }
    },
    carta3 = {
        nome: "Pikachu",
        imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        atributos: {
         ataque: 103,
         defesa: 76,
         hp: 180
  }
    },
    carta4 = {
        nome: "Lapras",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png", 
        atributos: {
         ataque: 157,
         defesa: 148,
         hp: 370
  }
    },
    carta5 = {
        nome: "Cyndaquill",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png", 
        atributos: {
         ataque: 98,
         defesa: 81,
         hp: 188
  }
    }
]

var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random()*5)
    cartaMaquina = cartas[numeroCartaMaquina]
    console.log(cartaMaquina)
    var numeroCartaJogador = parseInt(Math.random()*5)
    while (numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random()*5)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador()
    sumirCartaMaquina()
}

function obtemAtributoSelecionado() {

    var radioAtributos = document.getElementsByName("atributo")

    for (var i=0; i<radioAtributos.length;i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina){
        elementoResultado = "<p class='resultado-final'>Venceu!</p>"
    } else if(valorCartaMaquina > valorCartaJogador){
        elementoResultado = "<p class='resultado-final'>Você perdeu! A carta da máquina é maior</p>"
    } else {
        elementoResultado = "<p class='resultado-final'>Empatou!</p"
    }
    divResultado.innerHTML = elementoResultado

    document.getElementById('btnJogar').disabled = true
    exibirCartaMaquina()
    document.getElementById('btnSortear').disabled = false
}

function exibirCartaJogador() {

    var divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div  id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div  id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for(var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function sumirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    divCartaMaquina.style.backgroundImage=""
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.innerHTML = moldura + '</div>'
}
