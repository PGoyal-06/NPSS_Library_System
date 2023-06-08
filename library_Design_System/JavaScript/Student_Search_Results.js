function displayFinalResults() {
  // Retrieve the values from local storage
  var bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey")) || [];
  var bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey")) || [];
  var bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey")) || [];
  var bookPubDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey")) || [];
  var bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey")) || [];
  var bookAvailLib = JSON.parse(localStorage.getItem("libTechAvailKey")) || [];

  var bookNumStud = JSON.parse(localStorage.getItem("studentBookNumKey")) || "";
  var bookTitleStud = JSON.parse(localStorage.getItem("studentTitleKey")) || "";
  var bookAuthorStud = JSON.parse(localStorage.getItem("studentAuthorKey")) || "";
  var bookPubDateStud = JSON.parse(localStorage.getItem("studentPubDateKey")) || "";
  var bookTypeFicStud = JSON.parse(localStorage.getItem("studentTypeFictionKey")) || "";
  var bookTypeNonStud = JSON.parse(localStorage.getItem("studentTypeNonFictionKey")) || "";
  var bookTypeGNStud = JSON.parse(localStorage.getItem("studentTypeGNKey")) || "";

  var results = ""; // Variable to store matching results

  for (var i = 0; i < bookNumLib.length; i++) {
    if (
      (bookNumLib[i] == bookNumStud && bookNumStud !== "") ||
      (bookTitleLib[i] == bookTitleStud && bookTitleStud !== "") ||
      (bookAuthorLib[i] == bookAuthorStud && bookAuthorStud !== "") ||
      (bookPubDateLib[i] == bookPubDateStud && bookPubDateStud !== "") ||
      (bookTypeLib[i] == bookTypeFicStud && bookTypeFicStud !== "") ||
      (bookTypeLib[i] == bookTypeNonStud && bookTypeNonStud !== "") ||
      (bookTypeLib[i] == bookTypeGNStud && bookTypeGNStud !== "")
    ) {
      // Concatenate the matching results
      results += `<tr>
                    <td>${bookNumLib[i]}</td>
                    <td>${bookTitleLib[i]}</td>
                    <td>${bookAuthorLib[i]}</td>
                    <td>${bookTypeLib[i]}</td>
                    <td>${bookPubDateLib[i]}</td>
                  </tr>`;
    }
  }

  // Check if there are matching results
  if (results !== "") {
    // Display the results in a table format
    document.getElementById("resultsTable").innerHTML = `<thead>
                                                          <tr>
                                                            <th>Book Number</th>
                                                            <th>Book Title</th>
                                                            <th>Book Author</th>
                                                            <th>Book Genre</th>
                                                            <th>Publication Date</th>
                                                          </tr>
                                                        </thead>
                                                        <tbody>${results}</tbody>`;
  } else {
    // Display a message if no results were found
    document.getElementById("resultsTable").innerHTML = "<p>NO RESULTS FOUND</p>";
  }
}
