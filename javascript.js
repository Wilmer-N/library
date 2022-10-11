const titleInput = document.querySelector("#title-input")
const authorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
const isReadInput = document.querySelector("#checkbox-input")
const addButton = document.querySelector("#book-submit")


addButton.addEventListener("click", function(){
   const book = new Book(titleInput.value, authorInput.value, pagesInput.value, isReadInput.value)
   addBookToLibrary(book)
})


let myLibrary = [];

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
  console.log(myLibrary)
}


