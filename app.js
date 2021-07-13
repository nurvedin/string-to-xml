/*
const input = require("./string")

console.log("")
console.log(input.input)
console.log("")
*/

var text, parser, xmlDoc;

text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

var x = xmlDoc.getElementsByTagName("bookstore")
for (i = 0; i < x.length; i++) {
    console.log(x[i]);
}

//document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("bookstore")