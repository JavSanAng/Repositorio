// En el archivo osModule.js deberás sacar los siguientes datos:
// - Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
// - Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer
// Ejemplo de output: Nombre: darwin Tipo: Darwin 
// Versión: Darwin Kernel Version 23.1.0: Mon Oct 9 21:27:27 
// PDT 2023; root:xnu-10002.41.9~6/RELEASE_X86_64 
// Arquitectura: x64 CPUs: 12 MemoriaTotal: 16384.00 MB MemoriaLibre: 370.71 MB

const os = require('node:os');

const so = { 
    Nombre: os.platform(),
    Tipo: os.type(),
    Versión: os.release(),
    Arquitectura: os.arch(),
    CPUs:  os.cpus().length,
    MemoriaTotal: os.totalmem()/1024/1024,
    MemoriaLibre: os.freemem()/1024/1024,
    }
module.exports = {so}