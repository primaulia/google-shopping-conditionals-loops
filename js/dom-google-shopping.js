document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items
    var shoppingList = document.querySelector('#shopping-list')
    var button = document.querySelector('#cartButton')
    var button2 = document.querySelector('#byBrand')
    var button3 = document.querySelector('#allItems')
    var input = document.querySelector('input')
    button.addEventListener('click', addToCart)
    button2.addEventListener('click', byBrand)
    button3.addEventListener('click', allItems)

    function addToCart () {
      var shoppingList2 = document.querySelectorAll('#shopping-list li')
      var lastItem = shoppingList2[shoppingList2.length - 1]
      var cartList = document.querySelector('#cart-list')
      cartList.appendChild(lastItem)
    }
    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    function allItems () {
      shoppingList.innerHTML = ''
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        shoppingList.appendChild(listItem)
      })
    }
    function byBrand () {
      shoppingList.innerHTML = ''
      items.forEach(function (item) {
        var listItem = document.createElement('li')
        if (input.value === item.product.brand) {
          listItem.textContent = item.product.title
          shoppingList.appendChild(listItem)
        }
      })
    }

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
