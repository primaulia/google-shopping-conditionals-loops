document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    // console.log('Checkout this JSON! ', data.items)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items
    var shoppingList = document.querySelector('#shopping-list')

    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    })

    var button = document.querySelector('button')
    button.addEventListener('click', addToCart)

    function addToCart () {
      var shoppingList = document.querySelectorAll('#shopping-list li')
      if (!shoppingList.length) {
        alert('shopping list is empty')
        return // need to return, so the function stops running
      }

      var cartList = document.querySelector('#cart-list')
      var lastItem = shoppingList[shoppingList.length - 1]
      cartList.appendChild(lastItem)
    }

    // search by brand
    var searchBrand = document.querySelector('#searchBrand')
    // if i put the searchValue here, it's always empty on getItemsByBrand

    function getItemsByBrand (eachItem) {
      // if i put here, searchValue is always new
      var searchValue = searchBrand.value
      var brandNameInData = eachItem.product.brand.toLowerCase()

      // should only returns condition based on each item
      // items[i].product.brand === brand
      // console.log('each item brand name is', brandNameInData)
      // console.log('searchValue is ', searchValue)
      // console.log(brandNameInData === searchValue)

      return brandNameInData === searchValue
    }

    searchBrand.addEventListener('keyup', function () {
      // console.log(items)

      var filteredItems = items.filter(getItemsByBrand)
      shoppingList.innerHTML = ''
      filteredItems.forEach(function (item) {
        // console.log(shoppingList);
        var listItem = document.createElement('li')
        listItem.textContent = item.product.title
        shoppingList.appendChild(listItem)
      })
    })

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
