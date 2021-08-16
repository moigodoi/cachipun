


//elements
const piedra = 'piedra';
const papel = 'papel';
const tijera = 'tijera';

let computerScore = 0;
let playerScore = 0;
let numberOfGames = 1;
let numbergames = 0;
let numberplay = 0
var juejocompu = ""

function startGame() {
  numbergames = parseInt(prompt('Ingrese cantidad de Juegos!'));
  if (isNaN(numbergames)) {
    do {
      numbergames = Number(prompt("No es un numero, vuelve a introducir el primer valor"));
    } while (isNaN(numbergames));
  }

  let str = 'Hola, empecemos a jugar, el mejor de ' + numbergames + ' !';
  alert(str);
}

startGame();

//Score Count

function game() {

  if (numberOfGames > numbergames && playerScore > computerScore) {
    alert('Tu ganas!, eres un maestro!')
    endGame();

  } else if (numberOfGames > numbergames && playerScore < computerScore) {
    alert('Tu Pierdes!, Computador Gana!!')
    endGame();

  } else if (numberOfGames > numbergames && playerScore === computerScore) {
    alert("Es un Empate!")
    endGame();

  }
};

function endGame() {
//  alert(numberOfGames)
setInterval("endGame()", 10000);
var respuesta = confirm("Juego Termimnado, desea continuar")
if (respuesta)
  window.location.href = window.location.href;
//      alert("Usted aceptó.");
else
  window.close();

  document.getElementById('computerScore').textContent = computerScore;
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('numberOfGames').textContent = numberOfGames + ' de ' + numbergames;
  playerScore = '0';
  computerScore = '0';
  numberOfGames = 0;
  //      document.getElementById('computerChoice').textContent='??';
  document.getElementById('resultado').textContent = '?';
  //      document.getElementById('numberOfGames').textContent='0';
};


// playRound function


function playRound(playerChoice) {



  let computerChoice = computerPlay();
  document.getElementById('computerChoice').textContent = computerChoice;
  juegocompu = computerChoice

  if (playerChoice === computerChoice) {
    let tie = `Es un Empate!`;
    document.getElementById('resultado').textContent = tie;
  } else if (playerChoice === piedra && computerChoice === tijera) {
    playerScore++;
    let win1 = 'Tu Ganas!, Piedra Gana a  Tijera!';
    document.getElementById('resultado').textContent = win1;

  } else if (playerChoice === piedra && computerChoice === papel) {
    computerScore++;
    let lose1 = 'Tu Pierdes!, Papel Gana a Piedra!';
    document.getElementById('resultado').textContent = lose1;

  } else if (playerChoice === tijera && computerChoice === papel) {
    playerScore++;
    let win2 = 'Tu ganas!, Tijera gana a Papel';
    document.getElementById('resultado').textContent = win2;
  } else if (playerChoice === tijera && computerChoice === piedra) {
    computerScore++;
    let lose2 = 'Tu Pierdes!, Piedra Gana a Tijera';
    document.getElementById('resultado').textContent = lose2;
  } else if (playerChoice === papel && computerChoice === tijera) {
    computerScore++;
    let lose3 = 'Tu pierdes!, Tijera Gana a Papel';
    document.getElementById('resultado').textContent = lose3;

  } else if (playerChoice === papel && computerChoice === piedra) {
    playerScore++;
    let win3 = 'Tu Ganas! Papel Gana a Piedra';
    document.getElementById('resultado').textContent = win3;

  }

  document.getElementById('computerScore').textContent = computerScore;
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('numberOfGames').textContent = numberOfGames + ' de ' + numbergames;

  numberOfGames++;

  game();
};




let button1 = document.getElementById('1');
button1.addEventListener('click', () => {
  playRound('piedra');
});
let button2 = document.getElementById('2');
button2.addEventListener('click', () => {
  playRound('papel');

});
let button3 = document.getElementById('3');
button3.addEventListener('click', () => {
  playRound('tijera');

});

// computer Play Function

function computerPlay() {
  var jugada = (Math.floor(Math.random() * 3));


  switch (jugada) {
    case 0:
      return piedra;
    //      break;
    case 1:
      return papel;
    //      break;
    case 2:
      return tijera;
    //     break;
  }
};


