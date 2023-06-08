// Variables for storing information of added books
var bookNumLib = [];
var bookTitleLib = [];
var bookAuthorLib = [];
var bookTypeLib = [];
var bookPubDateLib = [];
var bookAvailLib = [];

// Variable to store the form ID
var bookIDForm;

// Function for checking out a book
function checkoutBook(formID) {
    // Retrieve book data arrays from local storage
    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

    // Retrieve the book ID from the form and convert it to a string
    bookIDForm = JSON.stringify(formID.numCBook.value);

    var errCount = 0;

    for (var i = 0; i < bookNumLib.length; i++) {
        if (bookNumLib[i] === JSON.parse(bookIDForm)) {
            if (bookAvailLib[i] === "Yes") {
                // If the book is available, mark it as checked out
                bookAvailLib[i] = "No";
                localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib));
                alert(`Book ${bookTitleLib[i]} has been checked out.`);
            } else {
                alert(`Book ${bookNumLib[i]} is not available.`);
            }
        } else {
            errCount++;
        }

        if (errCount === bookTitleLib.length) {
            // If the book ID was not found, display an error message
            alert("Invalid Input, Please Try Again");
            break;
        }
    }
}
