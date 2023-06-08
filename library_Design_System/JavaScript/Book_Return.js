// Variables for storing information of added books
var bookNumLib = [];
var bookTitleLib = [];
var bookAuthorLib = [];
var bookTypeLib = [];
var bookPubDateLib = [];
var bookAvailLib = [];

// Variable to store the form ID
var bookIDForm;

// Function for returning a book
function returnBook(formID) {
    // Retrieve book data arrays from local storage
    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey"));

    // Retrieve the book ID from the form and convert it to a string
    bookIDForm = JSON.stringify(formID.numRBook.value);
    
    var errCount = 0;

    for (var i = 0; i < bookNumLib.length; i++) {
        if (bookNumLib[i] === JSON.parse(bookIDForm)) {
            if (bookAvailLib[i] === "No") {
                // If the book is currently not available, mark it as returned
                bookAvailLib[i] = "Yes";
                localStorage.setItem("libTechAvailKey", JSON.stringify(bookAvailLib));
                alert(`Thank You! Book ${bookTitleLib[i]} has been Returned.`);
            } else {
                alert(`The Book ${bookNumLib[i]} is already returned.`);
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
