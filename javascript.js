const titleInput = document.querySelector("#title-input")
const authorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
const isReadInput = document.querySelector("#checkbox-input")
const addButton = document.querySelector("#book-submit")
const libraryCon = document.querySelector("#library-container")
const addBookBtn = document.querySelector("#add-book")
const bookPopUp = document.querySelector("#book-pop")


addButton.addEventListener("click", function(){
    bookPopUp.style.display = "none"
    //creates a new object with the inputed values
   const book = new Book(titleInput.value, authorInput.value, pagesInput.value, isReadInput.value)
   addBookToLibrary(book)
   //makes a clean slate for the next book
   resetInput()
})

let myLibrary = [];

function createCard(object) {
    const newCard = document.createElement("div")
    newCard.classList.add("card")
    libraryCon.appendChild(newCard)
    //creates 3 paragraphs
    for (let i = 0; i < 3; i++) {
        const paragraph = document.createElement("p")
        //fills the paragraphs with the values from the object
        paragraph.textContent = object[Object.keys(object)[i]]
        newCard.appendChild(paragraph)
    }
}

function Book(name, author, pages, isRead) {
    // the constructor...
    this.name = name
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
  
  function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book)
    createCard(book)
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