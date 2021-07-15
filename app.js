/*
const input = require("./string")

console.log("")
console.log(input.input)
console.log("")
*/

/*
let text
let parser
let xmlDoc;

text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

let x = xmlDoc.getElementsByTagName("bookstore")
for (i = 0; i < x.length; i++) {
    console.log(x[i]);
}

//document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("bookstore")
*/


let doc = document.implementation.createDocument("", "", null)
let peopleElem = doc.createElement("people")

let personElem1 = doc.createElement("person")

let firstName = doc.createElement("firstname")
let lastName = doc.createElement("lastname")
const fname = doc.createTextNode("Carl Gustaf");
const lname = doc.createTextNode("Bernadotte");
firstName.appendChild(fname)
lastName.appendChild(lname)

let addressElem1 = doc.createElement("address")
let street = doc.createElement("street")
let city = doc.createElement("city")
let zipCode = doc.createElement("zipcode")
const streetName = doc.createTextNode("Drottningholms slott")
const cityName = doc.createTextNode("Drottningholms slott")
const zipCodeNum = doc.createTextNode("Drottningholms slott")
street.appendChild(streetName)
city.appendChild(cityName)
zipCode.appendChild(zipCodeNum)
addressElem1.appendChild(street)
addressElem1.appendChild(city)
addressElem1.appendChild(zipCode)

let phone = doc.createElement("phone")
let mobile = doc.createElement("mobile")
let landLine = doc.createElement("landline")
const mobileNum = doc.createTextNode("0768-101801")
const landLineNum = doc.createTextNode("08-101801")
mobile.appendChild(mobileNum)
landLine.appendChild(landLineNum)
phone.appendChild(mobile)
phone.appendChild(landLine)

peopleElem.appendChild(personElem1)
personElem1.appendChild(firstName)
personElem1.appendChild(lastName)
personElem1.appendChild(addressElem1)
personElem1.appendChild(phone)
doc.appendChild(peopleElem)

console.log(doc)

/*
<people>
  <person>
    <firstname>Carl Gustaf</firstname>
    <lastname>Bernadotte</lastname>
    <address>
      <street>Drottningholms slott</street>
      ...
     </address>
    <phone>
      <mobile>0768-101801</mobile>
      ...
    </phone>
    <family>
      <name>Victoria</name>
        <born>1977</born>
        <address>...</address>
     </family>
     <family>...</family>
  </person>
  <person>...</person>
</people>
*/
/*
P|Carl Gustaf|Bernadotte
T|0768-101801|08-101801
A|Drottningholms slott|Stockholm|10001
F|Victoria|1977
A|Haga Slott|Stockholm|10002
F|Carl Philip|1979
T|0768-101802|08-101802
P|Barack|Obama
A|1600 Pennsylvania Avenue|Washington, D.C
*/