let text2
let parser
let xmlDoc;

text2 = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text2,"text/xml");

let x = xmlDoc.getElementsByTagName("bookstore")
for (let i of x) {
    console.log(i);
}

//document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("bookstore")
