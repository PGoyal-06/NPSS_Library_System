// This function is responsible for deleting a book from the library

function deleteBook() {
  // Get the book number from the input field with the id "numDBook"
  var bookNumber = document.getElementById("numDBook").value;
  
  // Retrieve the arrays from local storage
  var bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
  var bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
  var bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
  var bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
  var bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
  var bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

  // Find the index of the book number in the array
  var bookIndex = bookNumLib.indexOf(bookNumber);
  
  if (bookIndex !== -1) {
    // Remove the book from all corresponding arrays
    bookNumLib.splice(bookIndex, 1);
    bookTitleLib.splice(bookIndex, 1);
    bookAuthorLib.splice(bookIndex, 1);
    bookTypeLib.splice(bookIndex, 1);
    bookPubDateLib.splice(bookIndex, 1);
    bookAvailLib.splice(bookIndex, 1);

    // Update the local storage with the modified arrays
    localStorage.setItem("libTechBookNumKey", JSON.stringify(bookNumLib));
    localStorage.setItem("libTechTitleKey", JSON.stringify(bookTitleLib));
    localStorage.setItem("libTechAuthorKey", JSON.stringify(bookAuthorLib));
    localStorage.setItem("libTechTypeKey", JSON.stringify(bookTypeLib));
    localStorage.setItem("libTechPubDateKey", JSON.stringify(bookPubDateLib));
    localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib));

    // Display a success message
    alert("Book removed successfully.");
  } else {
    // If the book was not found, display an error message
    alert("Book not found.");
  }
}
