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

    function getItemsByBrand(items, brand) {
        var selectedItemsArray = []

        for (var i = 0; i < items.length; i++) {
          if (items[i].product.brand === brand) {
            selectedItemsArray.push(items[i])
          }
        }
        return selectedItemsArray
    }

    function searchBrand() {
      var inputBrand = document.querySelector('#inputBrand input')
      alert(inputBrand)
    }

    var button = document.querySelector('#startBrandSearch button')
    button.addEventListener('click', searchBrand)

    var items = data.items
    var shoppingList = document.querySelector('#shopping-list')

    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    })

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
