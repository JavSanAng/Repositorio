import React from 'react';
import './App.css';
import Encabezado from './components/encabezado';
import Pie from './components/pie';
import ListaEmpleados from './components/listaEmpleados';
import Calculadora from './components/calculadora';
import { obtenerEmpleados } from './components/empleados';


function App() {
  const empleados = obtenerEmpleados();
  return (
<div className="envoltura">
            <Encabezado />
            <Calculadora />
            <ListaEmpleados empleados={empleados} />
            <Pie />
        </div>
  );
}

export default App
