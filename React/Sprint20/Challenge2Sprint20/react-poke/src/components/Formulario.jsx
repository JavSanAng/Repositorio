import React, {useState} from "react";

const Formulario = ({onSearch}) =>{
    const [nombre, setNombre] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        onSearch(nombre);
        alert(`Nombre del Pokemon: ${nombre}`)
    };

    return (
        <form onSubmit={handleSubmit} className="formulario">
            <div className="form-name">
                <label htmlFor="nombre">Nombre: </label>
                <input 
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
            </div>
            <button type="submit">Enviar</button>
    </form>
    );
};

export default Formulario;