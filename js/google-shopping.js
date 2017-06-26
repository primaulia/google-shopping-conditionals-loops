/// Declare JSON object
var data = require('../products.json')

/////////////////////////////
// INSTRUCTORS' SAMPLE CODE
/////////////////////////////

// 1.  Print the count of these results. Where else is this count information stored in the search results?
// var itemCount = 0
//
// for (var i = 0; i < items.length; i++) {
//   itemCount += 1
// }
//
// console.log('there are ' + itemCount + ' products')
//
// // 2. Print the title of all items with a backorder availability in inventories
//
// // loop through all the items again
// for (var j = 0; j < items.length; j++) {
//   var eachItem = items[j]
//   var inventories = eachItem.product.inventories[0]
//   // console.log(inventories)
//   if (inventories.availability === 'backorder') {
//     console.log(eachItem.product.brand + ' is available for backorder')
//   }
// }

////////////////////////////
// 1. Create a function called getItems that simply returns the
// items array from the google product object.
////////////////////////////

function getItems(JSONobject) {
  var items = data.items
  return items
}

////////////////////////////
// 2. Create a function called getItemsByBrand that takes an item array
// returns a new array of all items of a specified brand.
////////////////////////////

function getItemsByBrand(items, brand) {
    var selectedItemsArray = []

    for (var i = 0; i < items.length; i++) {
      if (items[i].product.brand === brand) {
        selectedItemsArray.push(items[i])
      }
    }
    return selectedItemsArray
}

// TESTING SEARCHES
// var selectedItemsByBrand = getItemsByBrand(getItems(data), 'Sony')
// var selectedItemsByBrand = getItemsByBrand(getItems(data), 'Canon')
// console.log(selectedItemsByBrand)
// console.log(selectedItemsByBrand)
// var selectedItemsByBrand = getItemsByBrand(getItems(data), 'Nikon')
// console.log(selectedItemsByBrand)
// var selectedItemsByBrand = getItemsByBrand(getItems(data), 'Panasonic')
// console.log(selectedItemsByBrand)



////////////////////////////
// 3. Create a function called getItemsByAuthor that takes
// an item array and returns a new array of all items by a specified author.
////////////////////////////

function getItemsByAuthor(items, author) {
    var selectedItemsArray = []

    for (var i = 0; i < items.length; i++) {
      if (items[i].product.author.name === author) {
        selectedItemsArray.push(items[i])
      }
    }
    return selectedItemsArray
}

// TESTING getItemsByAuthor
// var TargetAuthor = 'Target'
// var selectedArray = getItemsByAuthor(items, TargetAuthor)
// for (var i = 0; i < selectedArray.length; i++) {
//   console.log(selectedArray[i].product.author.name)
// }
// console.log('The following item(s) is/are by ' + TargetAuthor)
// console.log(selectedArray)
//
// var TargetAuthor = 'CDW'
// selectedArray = getItemsByAuthor(items, TargetAuthor)
// for (var i = 0; i < selectedArray.length; i++) {
//   console.log(selectedArray[i].product.author.name)
// }
// console.log('The following item(s) is/are by ' + TargetAuthor)
// console.log(selectedArray)
//
// var TargetAuthor = 'eBay'
// selectedArray = getItemsByAuthor(items, TargetAuthor)
// for (var i = 0; i < selectedArray.length; i++) {
//   console.log(selectedArray[i].product.author.name)
// }
// console.log('The following item(s) is/are by ' + TargetAuthor)
// console.log(selectedArray)



////////////////////////////
// 4. Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)
////////////////////////////

function getAvailableProducts(items) {
    var selectedItemsArray = []
    for (var i = 0; i < items.length; i++) {
      //console.log(items[i].product.author.name)
      for (var j = 0; j < items[i].product.inventories.length; j++) {
        //console.log(items[i].product.inventories[j].availability)
        if (items[i].product.inventories[j].availability === 'inStock') {
          //console.log('i = ' + i + ' j = ' + j + ' inStock')
          selectedItemsArray.push(items[i])
          break
        }
      }
    }
    return selectedItemsArray
}

// TESTING getAvailableProducts()
// var selectedProducts = getAvailableProducts(getItems(data))
// console.log(selectedProducts)
// console.log('There are ' + selectedProducts.length + ' products available.')

////////////////////////////
// 5. Use your functions from 1 - 4
////////////////////////////


var SonyProducts = getItemsByBrand(getItems(data), 'Sony')
var AvailSonyProducts = getAvailableProducts(SonyProducts)
var AvailAdoramaCam = getAvailableProducts(getItemsByAuthor(getItems(data), 'Adorama Camera'))
var eBayNikon = getItemsByAuthor(getItemsByBrand(getItems(data), 'Nikon'), 'eBay')

console.log(SonyProducts)

console.log(AvailSonyProducts)

if (AvailAdoramaCam.length === 0) {
   console.log('No avail items for author by Adorama Camera')
} else {
  console.log(AvailAdoramaCam)
}

if (eBayNikon.length === 0) {
   console.log('No items made by Nikon with author eBay')
} else {
  console.log(eBayNikon)
}
