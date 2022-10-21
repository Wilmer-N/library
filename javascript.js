const titleInput = document.querySelector("#title-input")
const authorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
//const isReadInput = document.querySelector("#checkbox-input")//
const addButton = document.querySelector("#book-submit")
const libraryCon = document.querySelector("#library-container")
const addBookBtn = document.querySelector("#add-book")
const bookPopUp = document.querySelector("#book-pop")
const checkBox = document.querySelector("#checkbox-input")


addButton.addEventListener("click", function(){
    bookPopUp.style.display = "none"
    //creates a new object with the inputed values
   const book = new Book(titleInput.value, authorInput.value, pagesInput.value, isChecked())
   addBookToLibrary(book)
   //makes a clean slate for the next book
   resetInput()
})

let myLibrary = [];

function isChecked(){
    if(checkBox.checked){
        return true
    }else{
        return false
    }
}

for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i])
}

function displayCard (){
    libraryCon.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i])
}}

function createCard(object) {
    const newCard = document.createElement("div")
    newCard.classList.add("card")
    libraryCon.appendChild(newCard)
    //creates 3 paragraphs
    for (let i = 0; i < 3; i++) {
        const paragraph = document.createElement("p")
        //fills the paragraphs with the values from the object
        paragraph.textContent = `${Object.keys(object)[i]}: \r ${object[Object.keys(object)[i]]}`
        newCard.appendChild(paragraph)
    }
    const removeText = document.createElement("p")
    newCard.appendChild(removeText)
    removeText.textContent = "Mark as finished"
    const toggleIsRead = document.createElement("input")
    toggleIsRead.setAttribute("type", "checkbox")
    newCard.appendChild(toggleIsRead)
    if(object.isRead){
        toggleIsRead.checked = true
        newCard.style.backgroundColor = "#65b856"
    }else{
        newCard.style.backgroundColor = "#bf6060"
    }
    const removeBtn = document.createElement("button")
    newCard.appendChild(removeBtn)
    removeBtn.textContent = "Remove"
    removeBtn.addEventListener("click", function(){
        myLibrary.splice(myLibrary.indexOf(object), 1)
        displayCard()
    })

    toggleIsRead.addEventListener("click", function(){
        if(toggleIsRead.checked){
            object.isRead = true
            newCard.style.backgroundColor = "#65b856"
        }else{
            object.isRead = false
            newCard.style.backgroundColor = "#bf6060"
        }

    })
    
}

function removeBook(){

}

class Book{
 constructor(name, author, pages, isRead) {
    // the constructor...
    this.name = name
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}

  
  function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book)
    displayCard(book)
  }

addBookBtn.addEventListener("click", function(){
    //makes the pop-up visable
    bookPopUp.style.display = "flex"
})

function resetInput(){
    titleInput.value = ""
     authorInput.value = ""
      pagesInput.value = ""
}