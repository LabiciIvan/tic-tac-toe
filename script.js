let placeXorO = "X";
let moves = 9;
let positionOfXandOInArray = [];

document.querySelectorAll(".boxes").forEach(box => { box.addEventListener("click", fillBoxes, { once: true }) });

function fillBoxes(index) {
  let divElementClicked = index.target;
  let positionFromNode = divElementClicked.getAttribute('indexCelula');
  divElementClicked.innerHTML = placeXorO;
  positionOfXandOInArray[positionFromNode] = placeXorO;
  XorO();
  checkBoard();
}

function XorO() {
  if (placeXorO == "X") {
    placeXorO = "O";
  } else {
    placeXorO = "X";
  }
  --moves;
}

function winner(winner) {
  coverBoard(winner);
}

function createDiv(winner) {
  let cover = document.createElement("div");
        cover.id = 'gameBoardCover';
        cover.onclick = restart;
        if (winner == "X" || winner == "O") {
          cover.innerHTML = "Winner is: " + winner;
        } else {
          cover.innerHTML = "It's a Draw!";
        }
        document.getElementById('gameBoard').append(cover);
}

function restart() {
  window.location.reload();
}

function coverBoard(winner) {
  document.getElementById('gameBoard').innerHTML = "";
  createDiv(winner);
}

function checkBoard() {
  let x = "X", o = "O";
  if (positionOfXandOInArray[0] == "X" && positionOfXandOInArray[1] =="X" && positionOfXandOInArray[2] == "X") {
    winner(x);
  } else if (positionOfXandOInArray[0] == "O" && positionOfXandOInArray[1] =="O" && positionOfXandOInArray[2] == "O") {
    winner(o);
  } else if (positionOfXandOInArray[3] == "X" && positionOfXandOInArray[4] =="X" && positionOfXandOInArray[5] == "X") {
    winner(x);
  } else if (positionOfXandOInArray[3] == "O" && positionOfXandOInArray[4] =="O" && positionOfXandOInArray[5] == "O") {
    winner(o);
  } else if (positionOfXandOInArray[6] == "X" && positionOfXandOInArray[7] =="X" && positionOfXandOInArray[8] == "X") {
    winner(x);
  } else if (positionOfXandOInArray[6] == "O" && positionOfXandOInArray[7] =="O" && positionOfXandOInArray[8] == "O") {
    winner(o);
  } else if (positionOfXandOInArray[0] == "X" && positionOfXandOInArray[3] =="X" && positionOfXandOInArray[6] == "X") {
    winner(x);
  } else if (positionOfXandOInArray[0] == "O" && positionOfXandOInArray[3] =="O" && positionOfXandOInArray[6] == "O") {
    winner(o);
  } else if (positionOfXandOInArray[1] == "X" && positionOfXandOInArray[4] =="X" && positionOfXandOInArray[7] == "X") {
    winner(x);
  } else if (positionOfXandOInArray[1] == "O" && positionOfXandOInArray[4] =="O" && positionOfXandOInArray[7] == "O") {
    winner(o);
  } else if (positionOfXandOInArray[2] == "X" && positionOfXandOInArray[5] =="X" && positionOfXandOInArray[8] == "X") {
    winner(x);
  } else if (positionOfXandOInArray[2] == "O" && positionOfXandOInArray[5] =="O" && positionOfXandOInArray[8] == "O") {
    winner(o);
  } else if (positionOfXandOInArray[0] == "X" && positionOfXandOInArray[4] =="X" && positionOfXandOInArray[8] == "X") {
    winner(x);
  } else if (positionOfXandOInArray[0] == "O" && positionOfXandOInArray[4] =="O" && positionOfXandOInArray[8] == "O") {
    winner(o);
  } else if (positionOfXandOInArray[2] == "X" && positionOfXandOInArray[4] =="X" && positionOfXandOInArray[6] == "X") {
    winner(x);
  } else if (positionOfXandOInArray[2] == "O" && positionOfXandOInArray[4] =="O" && positionOfXandOInArray[6] == "O") {
    winner(o);
  } else if (moves == 0) {
    winner();
  }
}