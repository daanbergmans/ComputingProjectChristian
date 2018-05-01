document.onkeydown = checkKey;

let currentPosition = "0607";
let newPosition = "0607";

function fillTable() {
  let table = document.getElementById("playField");

  for (let i = 0; i <= 12; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j <= 14; j++) {
      let cell = row.insertCell(j);
      if (i < 10 && j < 10) {
        cell.id = "0" + i + "0" + j;
      } else if (i < 10) {
        cell.id = "0" + i + "" + j;
      } else if (j < 10) {
        cell.id = i + "0" + j;
      } else if (i >= 10 && j >= 10) {
        cell.id = i + "" + j;
      }
    }
  }

  document.getElementById(currentPosition).innerHTML = "test";
}

function checkKey(e) {
  e = e || window.event;

  switch(e.keyCode) {
    case 37: moveLeft();
    break;
    case 38: moveUp();
    break;
    case 39: moveRight();
    break;
    case 40: moveDown();
    break;
  }

  let missingChars = 4 - newPosition.length;

  for (let i = 0; i < missingChars; i++) {
    newPosition = "0" + newPosition;
  }

  document.getElementById(currentPosition).innerHTML = "";
  document.getElementById(newPosition).innerHTML = "test";

  currentPosition = newPosition;
}

function moveLeft() {
    if (currentPosition.substring(2, 4) == "00") {
      return;
    }

    newPosition = (parseInt(currentPosition, 10) - 1).toString();
}

function moveUp() {
    if (currentPosition.substring(0, 2) == "00") {
      return;
    }

    newPosition = (parseInt(currentPosition, 10) - 100).toString();
}

function moveRight() {
  if (currentPosition.substring(2, 4) == "14") {
    return;
  }

  newPosition = (parseInt(currentPosition, 10) + 1).toString();
}

function moveDown() {
    if (currentPosition.substring(0, 2) == "12") {
      return;
    }

    newPosition = (parseInt(currentPosition, 10) + 100).toString();

}
