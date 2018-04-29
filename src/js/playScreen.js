document.onkeydown = checkKey;

let currentPosition = "0607";

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

  switch(e.keyCode) {
    case 37: moveLeft();
    break;
    case 38: moveUp();
    break;
    case 39: moveRigh();
    break;
    case 40: moveDown();
    break;
  }

}

function moveUp() {
  let newPosition;

  if (currentPosition.substring(0, 2) == "00") {
    return;
  }

  if (currentPosition.substring(0, 1) == "0") {
    console.log(currentPosition.substring(0, 1));
    console.log(currentPosition.substring(2, 4));
    newPosition = "0" + (parseInt(currentPosition.substring(1, 2), 10) - 1) + "" + currentPosition.substring(2, 4);
    document.getElementById(currentPosition).innerHTML = "";
    document.getElementById(newPosition).innerHTML = "test";
    currentPosition = newPosition;
  }
}
