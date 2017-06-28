var p = document.querySelector('p')
var button = document.querySelector('button')
var button2 = document.querySelector('#a')
var products = ['Nikon Camera G2000', 'CANON D30', 'Leica X7']
p.textContent = 'my shopping list descriptions'
button.addEventListener('click', paraCreator)
button2.addEventListener('click', liCreator)
function paraCreator () {
  var newP = document.createElement('p')
  newP.textContent = 'new paragraph'
  var body = document.body
  body.appendChild(newP)
}

function liCreator () {
  var newLi = document.createElement('li')
  newLi = document.getElementsByTagName('li')[0]
  // products.pop() products[products.length - 1]
  var body2 = document.querySelector('#c')
  body2.appendChild(newLi)
  document.querySelector()
}
