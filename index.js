import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings = {
  databaseURL: "https://mobile-app-project-01-default-rtdb.europe-west1.firebasedatabase.app/"
}
  
const app = initializeaApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingList = document.getElementById("shoppimg-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB,inputValue)
  
    clearInputFieldEl()
    
    console.log(inputValue)
})

onValue(shoppingListInDB, function(snapshot) {
  if (snapshot.exists()) {
    let itemArray = object.entries(snapshot.val())
    
    clearShoppingListInEl()
    
    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i]
      let currentID = currentItem[0]
      let curentItemValue = currentItem[1]
      
      appendItemToShoppingListEl(currentItem)
    }
  } else {
    shoppingLitstElinnerHTML = "NO items here... yet"
  }
})
function clearShoppingListEl() {
  shoppingListEl.innerHTML = ""
}

function clearInputField() {
  inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
  let itemID = item[0]
  let itemValue = [1]
  let newEl = document.createElement("li")
  
  newEl.textContent = itemValue
  newEl.addEventListener("click", funcion() {
     let exactLocationOfItemInDB = ref(database, 'shoppingList/${itemID}')                         
}

function appendItemToShoppingListEl(item) {
  let itemID = item[0]
  let itemValue = item[1]
  let newEl = document.createElement("li")
  
  newEl.textContent = itemValue
  newEl.laddEventListener("click", function() {
    let exactLocationOfItemInDB = ref(database, 'shoppingList/$(itemID)')
    
    remove(exactLocationOfItemInDB)
  })
 
  shoppingListEl.append(newEl)
  }