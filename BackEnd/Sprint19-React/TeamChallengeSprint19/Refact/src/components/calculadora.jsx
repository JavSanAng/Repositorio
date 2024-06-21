import React, {useState} from "react";

function Calculadora(){
    const [primerNumero, setPrimerNumero] = useState(0);
    const [segundoNumero, setSegundoNumero] = useState(0);
    const [resultado, setResultado] = useState(null);

    const suma = ()=> setResultado(primerNumero + segundoNumero);
    const resta = ()=> setResultado(primerNumero - segundoNumero);
    const multiplicacion = ()=> setResultado (primerNumero * segundoNumero);
    const division = ()=> setResultado(primerNumero / segundoNumero);


return (
    <div className="calculadora">
        <input
            type="number"
            value={primerNumero}
            onChange = {(e)=> setPrimerNumero(parseFloat(e.target.value))}
            placeholder="Primer número"
        />
        <input
            type="number"
            value={segundoNumero}
            onChange = {(e)=> setSegundoNumero(parseFloat(e.target.value))}
            placeholder="Segundo número"
        />
        <div className="botonesCalculadora">
            <button onClick={suma}>Sumar</button>
            <button onClick={resta}>Restar</button>
            <button onClick={division}>Dividir</button>
            <button onClick={multiplicacion}>Multiplicar</button>
        </div>
        <p>Resultado: {resultado}</p>
    </div>
);
}

export default Calculadora;