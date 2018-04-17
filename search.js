function search() {
    mainContent.innerHTML = '<h1>Seach</h1>';
    showSearchFields();
}

function showSearchFields() {
    mainContent.innerHTML += '<input type="text"/><button onclick="showSearchResults()">search</button>'
}

function showSearchResults() {
    mainContent.innerHTML += "<br/>Per<br/>Pål<br/>Espen";
}