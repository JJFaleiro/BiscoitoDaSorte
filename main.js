//Variáveis da Aplicação
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnPlay = document.querySelector('#btnPlay')
const btnAgain = document.querySelector('#btnAgain')

//Variável de número randomico
let randomNumber = Math.round(Math.random() * 10)
const frasesCookie = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'A maior de todas as torres começa no solo.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'A adversidade é um espelho que reflete o verdadeiro eu.',
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  'O riso é a menor distância entre duas pessoas.',
  'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã'
]

//Eventos
btnPlay.addEventListener('click', openCookie)
btnAgain.addEventListener('click', resetLuck)
document.addEventListener('keydown', pressEnter)

//Funções
function openCookie(event) {
  event.preventDefault()

  screen2.querySelector('.mensage').innerText = frasesCookie[randomNumber]
  toggleScreen()

  // const luck = 0

  // switch (luck) {
  //   case 0:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = frasesCookie[0]
  //     toggleScreen()
  //     break
  //   case 1:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.`
  //     toggleScreen()
  //     break
  //   case 2:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `A maior de todas as torres começa no solo.`
  //     toggleScreen()
  //     break
  //   case 3:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?`
  //     toggleScreen()
  //     break
  //   case 4:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.`
  //     toggleScreen()
  //     break
  //   case 5:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.`
  //     toggleScreen()
  //     break
  //   case 6:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `Não importa o tamanho da montanha, ela não pode tapar o sol.`
  //     toggleScreen()
  //     break
  //   case 7:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `A adversidade é um espelho que reflete o verdadeiro eu.`
  //     toggleScreen()
  //     break
  //   case 8:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.`
  //     toggleScreen()
  //     break
  //   case 9:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `O riso é a menor distância entre duas pessoas.`
  //     toggleScreen()
  //     break
  //   case 10:
  //     screen2.querySelector(
  //       '.mensage'
  //     ).innerText = `Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã`
  //     toggleScreen()
  //     break
  // }
}

function resetLuck(event) {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
}

function pressEnter(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    resetLuck()
  }
}

//Função de inverter a classe hide entre os screen
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
