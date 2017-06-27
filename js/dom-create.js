// target the p element
var p = document.querySelector('p')

// update the p context
p.textContent = 'My shopping list description'

// Target the button
var button = document.querySelector('button')
button.addEventListener('click', addToCart)

function addToCart () {
  var shoppingList = document.querySelectorAll('#shopping-list li')
  var cartList = document.querySelector('#cart-list')  // not normal array, can't use array

  if (!shoppingList.length) {
    alert('shoppinglist is empty')
    return // need to return so the function stops running
  } else {
    var lastItem = shoppingList[shoppingList.length - 1]
    cartList.appendChild(lastItem)
  }
}

// function ulCreator (newListText) {
//   var newLi = document.createElement('li')
//   newLi.textContent = 'test'
//
//   var ul = document.querySelector('ul')
//   ul.appendChild(newLi)
// }

// function paraCreator () {
//   // create new element
//   // create new para
//   var newP = document.createElement('p')
//   newP.textContent = 'new paragraphzzz'
//   // target parent
//   var body = document.body
//   body.appendChild(newP)
// }
