const { viewNetworkInfo } = require("./networkModule");
const { so } = require("./osModule");


console.log ("Información del sistema operativo: ")
console.log ("___________________________________")
console.log(so)

console.log ("Información del modulo network: ")
console.log ("___________________________________")
console.log(viewNetworkInfo());