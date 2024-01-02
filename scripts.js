

const key ="8e086f5ad1434a7cec79c4552a375a20"

function colocardadosnatela(dados){
    console.log(dados)
document.querySelector(".cidade").innerHTML=dados.name = "Tempo em, " + dados.name
document.querySelector(".tempo").innerHTML = Math.floor (dados.main.temp) + " °C"
document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML=dados.main.humidity+ " %"
document.querySelector(".img-previsao").src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarcidade(cidade) {
const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

colocardadosnatela(dados)
}

function cliqueinobotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}

