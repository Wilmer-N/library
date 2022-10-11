const titleInput = document.querySelector("#title-input")
const authorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
const isReadInput = document.querySelector("#checkbox-input")
const addButton = document.querySelector("#book-submit")
const libraryCon = document.querySelector("#library-container")


addButton.addEventListener("click", function(){
   const book = new Book(titleInput.value, authorInput.value, pagesInput.value, isReadInput.value)
   addBookToLibrary(book)
})

let myLibrary = [
    {name: "wilmer",
     author: "me",
     pages: 150,
     isRead: true   
    },
    {name: "emil",
     author: "me",
     pages: 150,
     isRead: true   
    },
    {name: "ebber",
     author: "me",
     pages: 150,
     isRead: true   
    },
    {name: "simon",
     author: "me",
     pages: 150,
     isRead: true   
    }
];
for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i])
}


function createCard(object) {
    const newCard = document.createElement("div")
    newCard.classList.add("card")
    libraryCon.appendChild(newCard)
    for (let i = 0; i < 3; i++) {
        const paragraph = document.createElement("p")
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
    console.log(myLibrary)
  }