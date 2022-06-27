// JavaScript for Etch A Sketch

//default grid size before user input
const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

//creates grid based on input size
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(gridElement)
    }
  }
//does what it says
  setupGrid(DEFAULT_SIZE)

  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
  }
  }
  let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

