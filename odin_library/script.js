// Book Object
class Book {
  constructor(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.id = crypto.randomUUID();
  }
}

// Helper Function
function addBookToLibrary(name, author, genre) {
  let book = new Book(name, author, genre);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("child");
    let bookName = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookGenre = document.createElement("p");
    let deleteBook = document.createElement("p");
    deleteBook.textContent = "DELETE";
    deleteBook.setAttribute("style", "border: 3px solid red; color: red;");
    deleteBook.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      booksContainer.replaceChildren();
      displayBooks();
    });
    bookName.textContent = book.name;
    bookAuthor.textContent = book.author;
    bookGenre.textContent = book.genre;
    bookDiv.appendChild(bookName);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookGenre);
    bookDiv.appendChild(deleteBook);
    booksContainer.appendChild(bookDiv);
  });
}

// Main

// Temporary Storage
const myLibrary = [];

// Default books
addBookToLibrary("Default 1", "Author 1", "Genre 1");
addBookToLibrary("Default 2", "Author 2", "Genre 2");
addBookToLibrary("Default 3", "Author 3", "Genre 3");

let booksContainer = document.querySelector(".books");
let bookForm = document.querySelector("#book-form");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(bookForm);
  addBookToLibrary(
    data.get("book-name"),
    data.get("book-author"),
    data.get("book-genre"),
  );
  booksContainer.replaceChildren();
  displayBooks();
});

displayBooks();
