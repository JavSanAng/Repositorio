import './App.css'
import { useState } from 'react'

// function App() {
//     const [name, newName] = useState(`"Sofía"`);
//     const names = ['Data', 'Reyes','Yolanda'];

//     const setName = (newValue) =>{
//       newName(newValue);
//     }



//   return(

//     <div className='App'>
//         <h2>Teacher Name: {name}</h2>
//         <ul>
//           {names.map(name=><li key={name}onClick={() => setName(name)}>{name}</li>)}
//         </ul>
//     </div>
// )
// }

// function App() {
//   const [name, newName] = useState(`"Sofía"`);
//   const changeName = (event) =>{
//     event.preventDefault();
//     const inputName = event.target[0].value;

//     if (inputName.length ===0){
//       console.error('Campo Vacio');
//     } else {
//       newName(event.target[0].value);
//       event.target[0].value ='';
//     }
//   }
//   return (
//       <div>
//         <form onSubmit={(event)=> changeName(event)}>
//           <label>
//             Name:
//             <input type="text" onChange={event => newName(event.target.value)} placeholder='Add a name' />
//           </label>
//           <button type="submit">Add Name</button>
//         </form>
//       </div>
//   );
// }


function App() {
  const [name, setName] = useState('Sofía');
  const [newName, setNewName] = useState('');

  const changeName = (event) => {
    event.preventDefault();
    const inputName = event.target.elements.nameInput.value.trim();

    if (inputName.length === 0) {
      console.error('Campo Vacio');
    } else {
      setName(inputName);
      event.target.elements.nameInput.value = '';
    }
  }

  return (
    <div>
      <form onSubmit={changeName}>
        <label>
          Name:
          <input 
            type="text" 
            name="nameInput"
            onChange={event => setNewName(event.target.value)}
            placeholder='Add a name' 
          />
        </label>
        <button type="submit">Add Name</button>
      </form>
      <p>Current name: {name}</p>
    </div>
  );
}

export default App;

