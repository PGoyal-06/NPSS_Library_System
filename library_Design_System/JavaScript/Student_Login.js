// Array storing valid usernames and passwords
var validCredentials = [
  { username: "vansh", password: "123" },
  { username: "samit", password: "456" },
  { username: "imaan", password: "789" }
];

// Function to check if the entered credentials are valid
function checkCredentials(username, password) {
  for (i = 0; i < validCredentials.length; i++) {
    var storedUsername = validCredentials[i].username;
    var storedPassword = validCredentials[i].password;

    if (username === storedUsername && password === storedPassword) {
      return true; // Valid credentials found
    }
  }
  return false; // No valid credentials found
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", function() {
    // DOMcontentLoaded allows JS to be executed when the HTML file has been fully loaded
    // addEventListener gives a special instruction that tells the element what to do when something specific happens
  var form = document.querySelector("form");
  //querySelector helps to find something specific things on a web page
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the entered username and password values
    var enteredUsername = document.getElementById("Username").value;
    var enteredPassword = document.getElementById("Password").value;

    // Check if the entered credentials are valid
    var isValid = checkCredentials(enteredUsername, enteredPassword);

    if (isValid) {
      // Redirect to the Student Search page if the credentials are valid
      window.location.href = "Student_Search.html";
    } else {
      // Display an error message for invalid credentials
      alert("Invalid username or password. Please try again.");
    }
  });
});
