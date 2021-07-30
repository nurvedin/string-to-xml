
//let input = require("./string")

const text = "P|Carl Gustaf|Bernadotte"+
"T|0768-101801|08-101801"+
"A|Drottningholms slott|Stockholm|10001"+
"F|Victoria|1977"+
"A|Haga Slott|Stockholm|10002"+
"F|Carl Philip|1979"+
"T|0768-101802|08-101802"+
"A|Mitt Slott|Växjö|10003"+
"P||"+
"A|1600 Pennsylvania Avenue|Washington, D.C"+
"T|0768-101803|08-101803"+
"P|Nurvedin|Dizdarevic"+
"A|Växjövägen|Växjö|10004"+
"F|Merita|1988"+
"P|Merita|Dizdarevic"



let person, firstName, lastName, fname, lname
let phone, mobile, landLine, mobileNum, landLineNum
let address, street, city, postalCode, streetName, cityName, postalCodeNum
let family, nameElement, born, familyName, yearBorn

let splittedString = text.split(/(?=[A-Z]\|)/g)

let images = document.getElementsByTagName('person')



//create xmlDocument and  People element to be the root element
const doc = document.implementation.createDocument("", "", null)
const people = doc.createElement("people")



doc.appendChild(people)



if(typeof(Node.prototype.multiAppend) !== "function") {
  Node.prototype.multiAppend = (function() {
    
      return function() {
          for (let i = 0; i < arguments.length; i++) {
              this.appendChild(arguments[i]);
          }
      };
  })();
}

for(let i = 0; i < splittedString.length; i++) {
  
  let fooP = splittedString[i].slice(/[^P]/)

  //console.log(fooP)

  if(splittedString[i].includes("P|")) {

    let names = splittedString[i].split(/\|/)
    //console.log(names)
    //if(names[1] !== "" && names[2] !== "") {
    person = doc.createElement("person")
    firstName = doc.createElement("firstname")
    lastName = doc.createElement("lastname")
    fname = doc.createTextNode(names[1])
    lname = doc.createTextNode(names[2])
    firstName.appendChild(fname)
    lastName.appendChild(lname)
    person.multiAppend(firstName, lastName)

      //console.log(person.childNodes[0])

    /*} else if(names[1] == "" || names[2] == "") {
      person.remove()
    }*/
    
  } else if(splittedString[i].includes("T|")) {

    let number = splittedString[i].split(/\|/)

    if(number[1] !== "" && number[2] !== "") {
      phone = doc.createElement("phone")
      mobile = doc.createElement("mobile")
      landLine = doc.createElement("landline")
      mobileNum = doc.createTextNode(number[1])
      landLineNum = doc.createTextNode(number[2])
      mobile.appendChild(mobileNum)
      landLine.appendChild(landLineNum)
      phone.multiAppend(mobile, landLine)
      person.appendChild(phone)
    } else if(number[1] == "" || number[2] == "") {
      phone.remove()
    }

  }  else if(splittedString[i].includes("F|")) {

    //create family xml element
    let familyValues = splittedString[i].split(/\|/)

    if(familyValues[1] !== "" && familyValues[2] !== "") {
      family = doc.createElement("family")
      nameElement = doc.createElement("name")
      born = doc.createElement("born")
      familyName = doc.createTextNode(familyValues[1])
      yearBorn = doc.createTextNode(familyValues[2])
      family.multiAppend(nameElement, born)
      nameElement.appendChild(familyName)
      born.appendChild(yearBorn)
      person.appendChild(family)
    } else if(familyValues[1] == "" || familyValues[2] == "") {
      family.remove()
    }
    
  } else if(splittedString[i].includes("A|")) {
    //create adress xml element
    
    let adressValues = splittedString[i].split(/\|/)

    if(adressValues[1] !== "" && adressValues[2] !== "" && adressValues[3] !== "") {
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
        address.multiAppend(street, city, postalCode)
        person.appendChild(address)
      } else if(adressValues.length == 3) {
        street.appendChild(streetName)
        city.appendChild(cityName)
        address.multiAppend(street, city)
        person.appendChild(address)
      }

    } else if(adressValues[1] == "" || adressValues[2] == "" || adressValues[3] == "") {
      address.remove()
    } 
  } /*else if(splittedString[i][0].includes("F") && splittedString[i+1][0].includes("P")) {
    console.log("F can NOT be followed by P")
    person.remove()
  }**/

  /*
  if(person.childNodes[0].firstChild == "" || person.childNodes[1].firstChild == "") {
    person.remove()
    break
  } else {
    people.appendChild(person)
  }
  //console.log(person.firstChild.firstChild)
  */
  people.appendChild(person)
  
  if(person.firstChild.textContent == "") {
    person.firstChild.parentElement.remove()
  }
  //console.log(person.children)  
}

//console.log(doc.getElementsByTagName('person')[0].nodeValue)
//console.log(doc.getElementsByTagName("person"))
//console.log(person.childNodes[1].firstChild)
/*
if(person.childNodes[0].firstChild == "" || person.childNodes[1].firstChild == "") {
  person.remove()
}
*/
//console.log(personArray[1].textContent)


console.log(doc)

