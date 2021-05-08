function dateFunction() {
    var x = new Date(document.lastModified);
    document.getElementById("lastUpdate").innerHTML = x;
}