
//let input = require("./string")

let text = "P|Carl Gustaf|Bernadotte"+
"T|0768-101801|08-101801"+
"A|Drottningholms slott|Stockholm|10001"+
"F|Victoria|1977"+
"A|Haga Slott|Stockholm|10002"+
"F|Carl Philip|1979"+
"T|0768-101802|08-101802"+
"A|Mitt Slott|Växjö|10003"+
"P|Barack|Obama"+
"A|1600 Pennsylvania Avenue|Washington, D.C"+
"T|0768-101803|08-101803"+
"P|Nurvedin|Dizdarevic"+
"A|Växjövägen|Växjö|10004"+
"F|Merita|1988"+
"P|Merita|Dizdarevic"



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
let postalCode
let streetName
let cityName
let postalCodeNum
let family
let nameElement
let born
let familyName
let yearBorn

/*
function createPersonElement(name1, name2) {
  const person = doc.createElement("person")
  const firstName = doc.createElement("firstname")
  const lastName = doc.createElement("lastname")
  const fname = doc.createTextNode(name1)
  const lname = doc.createTextNode(name2)
  firstName.appendChild(fname)
  lastName.appendChild(lname)
  person.appendChild(firstName)
  person.appendChild(lastName)
  return person
}
*/

let splittedString = text.split(/(?=[A-Z]\|)/g)

//pipe \|

//console.log(splittedString.includes("P"))

//create xmlDocument and  People element to be the root element
const doc = document.implementation.createDocument("", "", null)
const people = doc.createElement("people")

doc.appendChild(people)



for(let i = 0; i < splittedString.length; i++) {

  //console.log("orginal", splittedString[i][0])
  //console.log("Den framför", splittedString[i+1][0])
  
  //console.log(splittedString[i])
  //console.log(splittedString[i+1])
  
  /*
  if(splittedString[i][0].includes("F") == splittedString[i+1][0].includes("P")) {
    console.log("F can NOT be followed by P")
    //console.log("P can be followed by T, A and F")
    //console.log("F can be followed by T och A")
    break
  } else {
    console.log("F not followed by P, it is okej")
  }
  */
  
  
  /*
  if(när jag är på ett F så får det EJ komma ett P i positionen efter, i+1 !== "P") {
    console.log("P can be followed by T, A and F")
    console.log("F can be followed by T och A")
  } else {
    så får resten av programmet köra vidare
  }
  */


  if(splittedString[i].includes("P|")) {

    //create Person xml element
    let names = splittedString[i].split(/\|/)
    
    //createPersonElement(names[1], names[2])
    
    //console.log(names)
    person = doc.createElement("person")
    firstName = doc.createElement("firstname")
    lastName = doc.createElement("lastname")
    fname = doc.createTextNode(names[1])
    lname = doc.createTextNode(names[2])
    firstName.appendChild(fname)
    lastName.appendChild(lname)
    person.appendChild(firstName)
    person.appendChild(lastName)
    
    
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

    //create family xml element
    let familyValues = splittedString[i].split(/\|/)

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
    
  } else if(splittedString[i].includes("A|")) {
    //console.log(splittedString[i])
    //create adress xml element
    
    let adressValues = splittedString[i].split(/\|/)

    address = doc.createElement("address")
    street = doc.createElement("street")
    city = doc.createElement("city")
    postalCode = doc.createElement("postalcode")
    streetName = doc.createTextNode(adressValues[1])
    cityName = doc.createTextNode(adressValues[2])
    postalCodeNum = doc.createTextNode(adressValues[3])

    if(adressValues.length == 4) {
      street.appendChild(streetName)
      city.appendChild(cityName)
      postalCode.appendChild(postalCodeNum)
      address.appendChild(street)
      address.appendChild(city)
      address.appendChild(postalCode)
      person.appendChild(address)
    } else if(adressValues.length == 3) {
      street.appendChild(streetName)
      city.appendChild(cityName)
      address.appendChild(street)
      address.appendChild(city)
      person.appendChild(address)
    } 
  }

  
  //person.appendChild(firstName)
  //person.appendChild(lastName)
  people.appendChild(person)
  //person.appendChild(family)
  //person.appendChild(phone)
   
  
  //console.log(person.appendChild(phone))
}



//person.appendChild(address)
//person.appendChild(family)
//person.appendChild(phone)
console.log(doc)
//console.log(count)

