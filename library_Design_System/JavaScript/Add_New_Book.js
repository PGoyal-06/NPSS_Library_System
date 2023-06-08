// Initialize empty arrays to store book data
var libTechBookNum = [];
var libTechTitle = [];
var libTechAuthor = [];
var libTechType = [];
var libTechPubDate = [];
var libTechAvail = [];

// Function for adding a new book
function addNewBook(addBookForm) {
    // Retrieve existing books from local storage
    getExistingBooks();

    // Set variables to the values from the form
    libTechBookNum.push(addBookForm.bookNumL.value);
    libTechTitle.push(addBookForm.titleL.value);
    libTechAuthor.push(addBookForm.authorL.value);
    libTechType.push(addBookForm.bookTypeL.value);
    libTechPubDate.push(addBookForm.pubDateL.value);
    libTechAvail.push("Yes");

    // Save the updated arrays to local storage
    localStorage.setItem("libTechBookNumKey", JSON.stringify(libTechBookNum));
    localStorage.setItem("libTechTitleKey", JSON.stringify(libTechTitle));
    localStorage.setItem("libTechAuthorKey", JSON.stringify(libTechAuthor));
    localStorage.setItem("libTechTypeKey", JSON.stringify(libTechType));
    localStorage.setItem("libTechPubDateKey", JSON.stringify(libTechPubDate));
    localStorage.setItem("libTechAvailKey", JSON.stringify(libTechAvail));

    // Reset the form
    addBookForm.reset();
}

// Function for retrieving existing books from local storage
function getExistingBooks() {
    // Check if books already exist in local storage
    if (JSON.parse(localStorage.getItem("libTechBookNumKey")) != null) {
        // Retrieve book data from local storage and assign it to the arrays
        libTechBookNum = JSON.parse(localStorage.getItem("libTechBookNumKey"));
        libTechTitle = JSON.parse(localStorage.getItem("libTechTitleKey"));
        libTechAuthor = JSON.parse(localStorage.getItem("libTechAuthorKey"));
        libTechPubDate = JSON.parse(localStorage.getItem("libTechPubDateKey"));
        libTechType = JSON.parse(localStorage.getItem("libTechTypeKey"));
        libTechAvail = JSON.parse(localStorage.getItem("libTechAvailKey"));
    }
}
