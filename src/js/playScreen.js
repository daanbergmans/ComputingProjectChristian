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
      }
    }
  }

  document.getElementById(currentPosition).innerHTML = "test";
}

function checkKey(e) {
  e = e || window.event;

  console.log("Current position: " + currentPosition);

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

  console.log("Current position: " + currentPosition);

}

function moveLeft() {
  if (currentPosition.substring(2, 4) == "00") {
    return;
  }

  if (currentPosition.substring(2, 3) == "0") {
    newPosition = "0" + (parseInt(currentPosition.substring(3, 4), 10) - 1);
  } else {
    newPosition = (parseInt(currentPosition.substring(0, 2), 10) - 1);
  }

  newPosition = currentPosition.substring(0, 2) + "" + newPosition;

  document.getElementById(currentPosition).innerHTML = "";
  document.getElementById(newPosition).innerHTML = "test";
  currentPosition = newPosition;
}

function moveUp() {
  if (currentPosition.substring(0, 2) == "00") {
    return;
  }

  if (currentPosition.substring(0, 1) == "0") {
    newPosition = "0" + (parseInt(currentPosition.substring(1, 2), 10) - 1);
  } else {
    newPosition = (parseInt(currentPosition.substring(0, 2), 10) - 1);
  }

  newPosition += "" + currentPosition.substring(2, 4);

  document.getElementById(currentPosition).innerHTML = "";
  document.getElementById(newPosition).innerHTML = "test";
  currentPosition = newPosition;
}

function moveRight() {
  if (currentPosition.substring(2, 4) == "14") {
    return;
  }

  if (currentPosition.substring(2, 3) == "0" && parseInt(currentPosition.substring(3, 4), 10) < 9) {
    newPosition = "0" + (parseInt(currentPosition.substring(3, 4), 10) + 1);
  } else if (currentPosition.substring(2, 3) == "1" || currentPosition.substring(3, 4) == "9") {
    newPosition = (parseInt(currentPosition.substring(2, 4), 10) + 1).toString();
  }

  newPosition = currentPosition.substring(0, 2) + "" + newPosition;

  document.getElementById(currentPosition).innerHTML = "";
  document.getElementById(newPosition).innerHTML = "test";
  currentPosition = newPosition;
  newPosition = "";
}

function moveDown() {

  if (currentPosition.substring(0, 2) == "12") {
    return;
  }

  if (currentPosition.substring(0, 1) == "0" && parseInt(currentPosition.substring(1, 2), 10) < 9) {
    newPosition = "0" + (parseInt(currentPosition.substring(1, 2), 10) + 1).toString();
  } else if (currentPosition.substring(0, 1) == "1" || currentPosition.substring(1, 2) == "9") {
    newPosition = (parseInt(currentPosition.substring(0, 2), 10) + 1).toString();
  }

  newPosition += "" + currentPosition.substring(2, 4);

  document.getElementById(currentPosition).innerHTML = "";
  document.getElementById(newPosition).innerHTML = "test";
  currentPosition = newPosition;
}
