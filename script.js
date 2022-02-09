let placeXorO = "X";
let emptySquares = 9;
let positionOfXandOInArray = ["","","","","","","","",""];

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
  --emptySquares;
}

function winner(winner) {
  document.getElementById('gameBoard').innerHTML = "";
  createDiv(winner);
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

const winCombiantion = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkBoard() {
  for (let i = 0; i < 8; ++i) {
    let combination = winCombiantion[i];
    let first = positionOfXandOInArray[combination[0]];
    let second = positionOfXandOInArray[combination[1]];
    let third = positionOfXandOInArray[combination[2]];
    if (first == second && second == third && first != "" && second != "" && third != "") {
      let value = first;
      winner(value);
    } else if (emptySquares == 0) {
      winner()
    }
  }
}