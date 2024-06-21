
import React from "react";

function ListaEmpleados({ empleados }) {
    return (
        <div className="listaEmpleados">
            {empleados.map((empleado, indice) => (
                <div key={indice} className="empleado">
                    <p><strong>Nombre:</strong> {empleado.name}</p>
                    <p><strong>Apellidos:</strong> {empleado.lastName}</p>
                    <p><strong>Hobbies:</strong> {empleado.hobbies.join(', ')}</p>
                    <p><strong>Edad:</strong> {empleado.age}</p>
                </div>
            ))}
        </div>
    );
}

export default ListaEmpleados;
