
//let input = require("./string")


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
"A|Nuri Slott|Stockholm|10003"+
"P|Barack|Obama"+
"A|1600 Pennsylvania Avenue|Washington, D.C"+
"T|0768-101803|08-101803"+
"P|Nurvedin|Dizdarevic"+
"A|Växjövägen|Växjö|10004"+
"F|Merita|1988"



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
let nameElement
let born
let familyName
let yearBorn

let splittedString = text.split(/(?=[A-Z]\|)/g)

//pipe \|


//create xmlDocument and  People element to be the root element
const doc = document.implementation.createDocument("", "", null)
const people = doc.createElement("people")

doc.appendChild(people)

//console.log(splittedString[0].split(/\|/))
/*
for(let j of splittedString) {

  if(j.includes("P")) {
    console.log("P här")
  }
}
*/

for(let i of splittedString) {
  //console.log(i.search("P"))
   

  if(i.includes("P|")) {

    //create Person xml element
    let names = i.split(/\|/)
    
    //console.log(names)
    person = doc.createElement("person")
    firstName = doc.createElement("firstname")
    lastName = doc.createElement("lastname")
    fname = doc.createTextNode(names[1])
    lname = doc.createTextNode(names[2])
    firstName.appendChild(fname)
    lastName.appendChild(lname)
    
  } else if(i.includes("T|")) {
    //create phone xml element
    
    let number = i.split(/\|/)
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
    

  }  else if(i.includes("F|")) {

    //create family xml element
    let familyValues = i.split(/\|/)

    family = doc.createElement("family")
    nameElement = doc.createElement("name")
    born = doc.createElement("born")
    familyName = doc.createTextNode(familyValues[1])
    yearBorn = doc.createTextNode(familyValues[2])
    family.appendChild(nameElement)
    family.appendChild(born)
    nameElement.appendChild(familyName)
    born.appendChild(yearBorn)
    person.appendChild(family)
    
  } else if(i.includes("A|")) {
    //console.log(splittedString[i])
    //create adress xml element
    
    let adressValues = i.split(/\|/)

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
  //person.appendChild(family)
  //person.appendChild(phone)
   
  
  //console.log(person.appendChild(phone))
}
person.appendChild(address)
//person.appendChild(family)
//person.appendChild(phone)
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