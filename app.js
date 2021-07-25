
let input = require("./string")
/*
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

/*
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
const cityName = doc.createTextNode("Stockholm")
const zipCodeNum = doc.createTextNode("10001")
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

let family = doc.createElement("family")
let familyName = doc.createElement("name")
let born = doc.createElement("born")
let familyAddress = doc.createElement("adress")
let fStreet = doc.createElement("street")
let fCity = doc.createElement("city")
let fZipCode = doc.createElement("zipcode")
const nameFamily = doc.createTextNode("Victoria")
const bornYear = doc.createTextNode("1977")
const familyStreet = doc.createTextNode("Haga Slott")
const familyCity = doc.createTextNode("Stockholm")
const familyZipCode = doc.createTextNode("10002")
family.appendChild(familyName)
familyName.appendChild(born)
born.appendChild(bornYear)
familyName.appendChild(familyAddress)
familyAddress.appendChild(fStreet)
familyAddress.appendChild(fCity)
familyAddress.appendChild(fZipCode)
fStreet.appendChild(familyStreet)
fCity.appendChild(familyCity)
fZipCode.appendChild(familyZipCode)

let family2 = doc.createElement("family")
let familyName2 = doc.createElement("name")
let born2 = doc.createElement("born")
const nameFamily2 = doc.createTextNode("Carl Philip")
const bornYear2 = doc.createTextNode("1979")
family2.appendChild(familyName2)
familyName2.appendChild(born2)
born2.appendChild(bornYear2)
let phone2 = doc.createElement("phone")
let mobile2 = doc.createElement("mobile")
let landLine2 = doc.createElement("landline")
const mobileNum2 = doc.createTextNode("0768-101802")
const landLineNum2 = doc.createTextNode("08-101802")
familyName2.appendChild(phone2)
mobile2.appendChild(mobileNum2)
landLine2.appendChild(landLineNum2)
phone2.appendChild(mobile2)
phone2.appendChild(landLine2)

let personElem2 = doc.createElement("person")

let firstName2 = doc.createElement("firstname")
let lastName2 = doc.createElement("lastname")
const fname2 = doc.createTextNode("Barack")
const lname2 = doc.createTextNode("Obama")
firstName2.appendChild(fname2)
lastName2.appendChild(lname2)

let addressElem3 = doc.createElement("address")
let street3 = doc.createElement("street")
let city3 = doc.createElement("city")
const streetName3 = doc.createTextNode("1600 Pennsylvania Avenue")
const cityName3 = doc.createTextNode("Washington, D.C")
street3.appendChild(streetName3)
city3.appendChild(cityName3)
addressElem3.appendChild(street3)
addressElem3.appendChild(city3)

peopleElem.appendChild(personElem1)
personElem1.appendChild(firstName)
personElem1.appendChild(lastName)
personElem1.appendChild(addressElem1)
personElem1.appendChild(phone)
personElem1.appendChild(family)
personElem1.appendChild(family2)
peopleElem.appendChild(personElem2)
personElem2.appendChild(firstName2)
personElem2.appendChild(lastName2)
personElem2.appendChild(addressElem3)
doc.appendChild(peopleElem)

console.log(doc)
*/

let text = "P|Carl Gustaf|Bernadotte"+
"T|0768-101801|08-101801"+
"A|Drottningholms slott|Stockholm|10001"+
"F|Victoria|1977"+
"A|Haga Slott|Stockholm|10002"+
"F|Carl Philip|1979"+
"T|0768-101802|08-101802"+
"P|Barack|Obama"+
"A|1600 Pennsylvania Avenue|Washington, D.C"

let splittedString = text.split(/(?=[A-Z]\|)/g)

//min pipe separator \|

console.log(splittedString[1])
//for(let i = 0; i < text.length; i++) {
  //console.log(text[i].match(/[A-Z][a-z]+/g))
  /*
  if(text[i] == text[i].toUpperCase() && text[i+1] == "|") {
    console.log("YES")
  }
  */
//}

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