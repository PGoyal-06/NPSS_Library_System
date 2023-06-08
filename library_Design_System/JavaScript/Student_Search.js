function getStudentSearchData(searchBookForm){
//setting the variable to the form values
    studentBookNum = searchBookForm.bookNumS.value;
    studentTitle = searchBookForm.titleS.value;
    studentAuthor = searchBookForm.authorS.value;
    studentTypeFiction = searchBookForm.fictionS.checked ? 'fiction' : false;
    studentTypeNonFiction = searchBookForm.nonFictionS.checked ? 'non fiction' : false;
    studentTypeGN = searchBookForm.gnS.checked ? 'GN' : false;
    studentPubDate = searchBookForm.pubDateS.value;
    //saving the entered values to the local storage
    localStorage.setItem("studentBookNumKey", JSON.stringify(studentBookNum));
    localStorage.setItem("studentTitleKey", JSON.stringify(studentTitle));
    localStorage.setItem("studentAuthorKey", JSON.stringify(studentAuthor));
    localStorage.setItem("studentPubDateKey", JSON.stringify(studentPubDate));
    localStorage.setItem("studentTypeFictionKey", JSON.stringify(studentTypeFiction));
    localStorage.setItem("studentTypeNonFictionKey", JSON.stringify(studentTypeNonFiction));
    localStorage.setItem("studentTypeGNKey", JSON.stringify(studentTypeGN))
}
