/*
P|firstname|lastname
T|mobile|fixed number
A|street|city|postal code
F|name|year of birth
P can be followed by T, A and F
F can be followed by T och A

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

module.exports.input = "P|Carl Gustaf|Bernadotte" +
"\nT|0768-101801|08-101801" +
"\nA|Drottningholms slott|Stockholm|10001" +
"\nF|Victoria|1977" +
"\nA|Haga Slott|Stockholm|10002" +
"\nF|Carl Philip|1979" +
"\nT|0768-101802|08-101802" +
"\nP|Barack|Obama" +
"\nA|1600 Pennsylvania Avenue|Washington, D.C"