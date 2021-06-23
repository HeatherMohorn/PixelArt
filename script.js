// Define variables
const sizePicker = document.getElementById('sizePicker');
const colorPicker = document.getElementById('colorPicker');
const header = document.getElementById('header');
const table = document.getElementById('pixelCanvas');

//Resets the grid
//Then creates empty grid of submitted sizes
function makeGrid(event){
  event.preventDefault();
  table.innerHTML = "";
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  var rows = [];
  var cells = [];
  for (var i = 0; i < height; i++){
    rows.push(table.insertRow(i));
    for (var j = 0; j < width; j++){
      cells.push(rows[i].insertCell(j));
    }
  }
}

//Changes the background color a table data square
function whenClicked(event){
  color = colorPicker.value;
  event.target.style.backgroundColor = color;
}

//Add listeners for the submit and table
sizePicker.addEventListener('submit', makeGrid);
table.addEventListener('click', whenClicked);
