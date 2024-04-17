// En el archivo networkModule.js deberás sacar los siguientes datos de red:
// - Interfaz
// - Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.
// Ejemplo de output: Interfaz lo0: Familia: IPv4 Dirección: 127.0.0.1 
// Interno: true Familia: IPv6 Dirección: ::1 Interno: true Familia: IPv6 Dirección: fe80::1 Interno: true

const os = require('node:os');

function viewNetworkInfo(){
const networkInterfaces = os.networkInterfaces();
const networkInfo = [];
for (const interfaceName in networkInterfaces) {
    const interfacesList = networkInterfaces[interfaceName];
    for (const addressInfo of interfacesList) {
        networkInfo.push({  
                Interface: interfaceName,
                Familia: addressInfo.family, 
                Dirección: addressInfo.address, 
                Interno: addressInfo.internal});
    }
}
return networkInfo;
}

module.exports = {viewNetworkInfo};