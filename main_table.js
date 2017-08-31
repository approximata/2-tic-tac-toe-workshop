'use strict';
const table = document.querySelector("table")
const board = document.querySelector(".board");

let matrix = [
  ['', 'x', ''],
  ['', '', ''],
  ['', '', '']
]


//Practice: Add, one cell to the board and set an X in it.
//Hint: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/className

function addRow(sourceElement, newElementClass){
  const row = document.createElement("tr")
  sourceElement.appendChild(row)
  row.className = newElementClass
}

function addCell(sourceElement, newElementClass){
  const item = document.createElement("td")
  sourceElement.appendChild(item)
  item.className = newElementClass
}

// addRow(board, 'row1')
//
// const row = board.querySelector('.row1')
// addCell(row, 'item1')


//Hint: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

function setCellValue(cell, value){
  cell.innerHTML = value
}

// const cell = document.querySelector("item1")
// setCellValue(cell, x)

//-- Main code: Loop through the matrix and draw it’s values

function addRowToBoard(board, rowClassName) {
  const row = document.createElement("tr")
  board.appendChild(row)
  row.className = 'row' + rowClassName
}


function addCellToRow(row, cellClassName, cellValue) {
  const cell = document.createElement("td")
  row.appendChild(cell)
  cell.className = cellClassName
  cell.innerHTML = cellValue
}

function cellClassNameCreator(rowIndex, columnIndex){
  return 'cell-' + rowIndex + '-' + columnIndex
}

function renderBoard(board, matrix) {
  matrix.forEach((row, rowIndex) => {
    addRowToBoard(board, rowIndex)
    const rowElement = document.querySelector('.row' + rowIndex)
    row.forEach((item, itemIndex) => {
      let className = cellClassNameCreator(rowIndex, itemIndex)
      addCellToRow(rowElement, className, item)
    })
  })
}

function clearBoard(board) {
  board.remove();
  const newBoard = document.createElement("tbody")
  table.appendChild(newBoard)
  tbody.className = board
}

renderBoard(board, matrix)
//-- Main code: Setter

let player = 'x'
function setPlayer(){
  return player === 'x' ? 'o' : 'x'
}

function setMatrix(matrix, position, player){
  matrix[poeition[0]][position[1]] = player
  return matrix
}

//Test your solution
// setMatrix([0,1],'O')

//-- Main code: Event-listener

//Hint: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

function getPositionFromClass(nodeClass){
  const splitClass = nodeClass.split('-')
  let x = splitClass[1]
  let y = splitClass[2]
  return [x, y]
}

getPositionFromClass('cell-1-2')

function actionOnEvent(nodeClass){
  console.log(nodeClass);
  setPlayer()
  let position = getPositionFromClass(nodeClass)
  setMatrix(matrix, position, player)
  clearBoard(board)
  renderBoard(board)
}

function addEventListener(){
  const tdNodes = document.querySelectorAll('td')
  tdNodes.forEach(item => {item.addEventListener("click", () => {actionOnEvent(item.className)})})
  console.log(tdNodes);
}

addEventListener()
//-- Main code: checker

function isLineWin(matrix){

}

function isWon(){

}

function isGameOver(){

}

//-- Main code: Game //Invite the functions.

//
