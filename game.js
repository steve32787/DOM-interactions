// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
  
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

  
function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}

function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}

// CREATE FUNCTION hide HERE

function updateCounts () {
  var totals = {
    blue: 0,
    blue: 1,
    blue: 2,
    blue: 3,
    blue: 4,
    blue: 5,
    blue: 6,
    blue: 7,
    blue: 8,
    green: 0,
    green: 1,
    green: 2,
    green: 3,
    green: 4,
    green: 5,
    green: 6,
    green: 7,
    green: 8,
    invisible: 0,
    invisible: 1,
    invisible: 2,
    invisible: 3,
    invisible: 4,
    invisible: 5,
    invisible: 6,
    invisible: 7,
    invisible: 8
  }
 
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]

  }
}
