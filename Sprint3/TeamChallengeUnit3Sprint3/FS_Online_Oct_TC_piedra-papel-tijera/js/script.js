// Creado por Blanca Gómez, Javier Santiago, Adrian Giner.
let puntosUsuario = 0;
let puntosMaquina = 0;

let jugadaMaquina = '';

const botones = document.querySelectorAll('.boton-jugada');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorMaquina = document.getElementById('contador-ordenador');
const resultado = document.querySelector('.resultadoTextual');

const cambiarColor = document.querySelectorAll('.all');

const game = () => {
    botones.forEach(boton => { 
        boton.addEventListener('click', function(){
            const eleccionUsuario = this.dataset.jugada;

            const eleccionMaquina = Math.floor(Math.random() *3);
            
            valorJugadaMaquina();

            function valorJugadaMaquina() {
                if(eleccionMaquina === 0) {
                    jugadaMaquina = 'piedra';
                } else if(eleccionMaquina === 1) {
                    jugadaMaquina = 'papel';
                } else {
                    jugadaMaquina = 'tijera';
                }
                    
                // Empate
                if (jugadaMaquina === eleccionUsuario) {
                    resultado.innerHTML = `Empate`;
                    document.body.style.backgroundColor = 'white';
                } else if ((eleccionUsuario === 'piedra' && jugadaMaquina === 'tijera') // Gana el usuario.
                || (eleccionUsuario === 'papel' && jugadaMaquina === 'piedra')
                || (eleccionUsuario === 'tijera' && jugadaMaquina === 'papel')) {
                    puntosUsuario++;
                    resultado.innerHTML = `La maquina ha sacado ${jugadaMaquina}`;
                    document.body.style.backgroundColor = 'palegreen';
                } else { // Gana la maquina.
                    puntosMaquina++;
                    resultado.innerHTML = `La maquina ha sacado ${jugadaMaquina}`;
                    document.body.style.backgroundColor = 'lightpink';
                }


                contadorUsuario.innerHTML = `Tus puntos: ${puntosUsuario}`;
                contadorMaquina.innerHTML = `Puntos de la máquina: ${puntosMaquina}`;
                
                //console.log(`Usuario: ${eleccionUsuario}. Maquina: ${jugadaMaquina}. Puntos usuario: ${puntosUsuario}. Puntos maquina: ${puntosMaquina}`)
            }
        });
    });
};

game();