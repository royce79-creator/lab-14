/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
let totalCartCount = 0; 
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    option.value = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list
  let itemPicked = document.getElementById('items').value;
  console.log(itemPicked);
  // TODO: get the quantity
  let itemQuantity = document.getElementById('quantity').value;
  console.log(itemQuantity);
  // TODO: using those, add one item to the Cart
  cart.addItem(itemPicked, itemQuantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter(itemQuantity) {
  totalCartCount += itemQuantity;
  console.log(typeof(totalCartCount));
  JSON.stringify(itemQuantity);
  document.getElementById('itemCount').textContent = `:  ${cart.items.length} item(s)`;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let itemPicked = document.getElementById('items').value;
  console.log(itemPicked);
  let itemQuantity = document.getElementById('quantity').value;
  console.log(itemQuantity);
  cart.addItem(itemPicked, itemQuantity);
  updateCounter(itemQuantity);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
