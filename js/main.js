import { Questao } from './Questao.js'

var segundos = 0
var cronometro = document.querySelector('#cronometro')
var iniciarT = false

/** QUESTAO **/
var q = new Questao()
var questoes = document.createElement("div")
questoes.style.display = "none"

var resposta = document.createElement("input")
resposta.setAttribute("class", "number")
resposta.setAttribute("type", "number")

var btnOkResposta = document.createElement("button")
btnOkResposta.setAttribute("class", "btnResposta")
var contResposta = 1
/** -----  */


/**  INTRO  */
var body = document.querySelector("body")
var intro = document.querySelector("#intro")
var min = document.querySelector('#min')
var max = document.querySelector('#max')
let qnt = document.querySelector('#quantidade')
qnt.setAttribute('tabindex', '1')
let btnOkIntro = document.querySelector('#ok')
/** ----- */

btnOkResposta.addEventListener('click', function () {
    var texto = document.createTextNode(`${resposta.value}`)

    q.resposta = resposta.value
    q.objeto.appendChild(texto)

    if (q.verificarResposta()) {
        q.objeto.style.backgroundColor = "green"
    } else {
        q.objeto.style.backgroundColor = "red"
    }

    if (contResposta < qnt.value) {
        gerarQuestao()
    } else if (contResposta == qnt.value) {
        iniciarT = false
        resposta.style.display = "none"
        btnOkResposta.innerHTML = "Reiniciar"
    } else if (contResposta >= qnt.value) {
        contResposta = 0

        resposta.value = 0
        intro.style.display = "inline-block"
        resposta.style.display = "inline-flex"
        questoes.remove()
        window.location.reload(true)
    }
    console.log("contResposta: ", contResposta)

    contResposta++
})

btnOkIntro.addEventListener('click', function () {
    iniciarT = true
    

    if (min.value != 0 && max.value != 0 && qnt.value != 0) {
        if (min.value > max.value) {
            min.value = max.value - 1
            alert("digite um número menor para o segundo valor")
        } else {
            intro.style.display = 'none'

            questoes.style.display = "inline-flex"
            questoes.setAttribute('class', 'containerQuestoes')
            questoes.setAttribute('id', 'questoes')

            console.log("contResposta: ", contResposta)
            gerarQuestao()
        }
    } else {

        alert("Digite um valor diferente de zero para todos os campos.")
    }
})

function gerarQuestao() {
    q.n1 = numAleatorio(parseInt(max.value), parseInt(min.value))
    q.n2 = numAleatorio(parseInt(max.value), parseInt(min.value))

    btnOkResposta.innerHTML = "OK"
    btnOkResposta.style.display = "inline-block"

    var paragrafo = document.createElement("p")
    paragrafo.setAttribute("class", "questao")
    q.objeto = paragrafo

    resposta.value = 0

    var texto = document.createTextNode(`${q.n1} x ${q.n2} = `)

    paragrafo.appendChild(texto)
    paragrafo.appendChild(resposta)
    questoes.appendChild(paragrafo)
    questoes.appendChild(btnOkResposta)
    body.appendChild(questoes)
}

function numAleatorio(max, min) {
    return Math.floor((Math.random() * (max - min)) + min)
}

function ContarSegundos(){
    if(iniciarT) {
        segundos++
    }

    cronometro.innerHTML = `${segundos} segundos`
    document.Writeln("Já passou " + segundos +" segundos...");
}
setInterval(ContarSegundos, 1000);