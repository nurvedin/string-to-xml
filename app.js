
//let input = require("./string")
/*
console.log("")
console.log(input.input)
console.log("")
*/

/*
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

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

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
let person
let firstName
let lastName
let fname
let lname
let phone 
let mobile
let landLine
let mobileNum
let landLineNum
let address
let street
let city
let zipCode
let streetName
let cityName
let zipCodeNum
let family
let familyName
let born
let nameFamily
let yearBorn

//console.log(splittedString[0].split(/\|/))
//pipe \|

const doc = document.implementation.createDocument("", "", null)
const people = doc.createElement("people")

//create People element to be the root element
doc.appendChild(people)

//console.log(splittedString)

//console.log(findDuplicates(strArray)) // All duplicates
//console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates


for(let i = 0; i < splittedString.length; i++) {
  //console.log(splittedString)

  

  if(splittedString[i].includes("P|")) {
    //create Person xml element
    let names = splittedString[i].split(/\|/)
    
    //console.log(names)
    person = doc.createElement("person")
    firstName = doc.createElement("firstname")
    lastName = doc.createElement("lastname")
    fname = doc.createTextNode(names[1])
    lname = doc.createTextNode(names[2])
    firstName.appendChild(fname)
    lastName.appendChild(lname)
    
  } else if(splittedString[i].includes("T|")) {
    //create phone xml element
    
    let number = splittedString[i].split(/\|/)
    //console.log(number)
    phone = doc.createElement("phone")
    mobile = doc.createElement("mobile")
    landLine = doc.createElement("landline")
    mobileNum = doc.createTextNode(number[1])
    landLineNum = doc.createTextNode(number[2])
    mobile.appendChild(mobileNum)
    landLine.appendChild(landLineNum)
    phone.appendChild(mobile)
    phone.appendChild(landLine)
    person.appendChild(phone)
    

  }  else if(splittedString[i].includes("F|")) {
    //console.log(splittedString[i])
    //create family xml element
    let familyValues = splittedString[i].split(/\|/)
    //console.log(familyValues)

    family = doc.createElement("family")
    familyName = doc.createElement("name")
    born = doc.createElement("born")
    nameFamily = doc.createTextNode(familyValues[1])
    yearBorn = doc.createTextNode(familyValues[2])
    family.appendChild(familyName)
    family.appendChild(born)
    familyName.appendChild(nameFamily)
    born.appendChild(yearBorn)
    person.appendChild(family)
    
  } else if(splittedString[i].includes("A|")) {
    //console.log(splittedString[i])
    //create adress xml element
    
    let adressValues = splittedString[i].split(/\|/)

    console.log(adressValues)

    address = doc.createElement("address")
    street = doc.createElement("street")
    city = doc.createElement("city")
    zipCode = doc.createElement("zipcode")
    streetName = doc.createTextNode(adressValues[1])
    cityName = doc.createTextNode(adressValues[2])
    zipCodeNum = doc.createTextNode(adressValues[3])
    street.appendChild(streetName)
    city.appendChild(cityName)
    zipCode.appendChild(zipCodeNum)
    address.appendChild(street)
    address.appendChild(city)
    address.appendChild(zipCode)
    person.appendChild(address)
    
    
  }

  people.appendChild(person)
  person.appendChild(firstName)
  person.appendChild(lastName)
  //person.appendChild(address)
  //person.appendChild(phone)
   
  
  //console.log(person.appendChild(phone))
}
//console.log(person.appendChild(phone))
//person.appendChild(address)
person.appendChild(family)
person.appendChild(phone)
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