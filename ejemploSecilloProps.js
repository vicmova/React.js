//recibe props definidos en App.js
//este fichero está alojado en el directorio: components;
export default function Saludo(props){
    //vemos qué estamos recibiendo (qué hemos definido) desde App.js
    console.log(props);

    const { mensaje, nombre, code } = props;
    return(
        <div>
        
        <p><h2>Mostrar Componente: Saludo y prop nombre: {nombre} {code} </h2> </p>
        
        <p>{mensaje}</p>
        
        </div>
    );

}

//con contador

import { useState } from "react";

export default function Contador(){

    const[contador, setContador] = useState(0);

    return (

    <div>
        
        <h3>Contador: {contador}</h3>
        <button type="submit" onClick={() => (setContador(contador +1))}>Cuenta</button>
    
    </div>
    
    );

} 
   


//////////////////////////////////////////////////////////
//////////////fichero App.js//////////////////////////////
//////////////////////////////////////////////////////////

import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Contador from './components/Contador'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h4><Contador /></h4>
        
        <h3><Saludo mensaje="¿Qué tal estás?" nombre="Alf" code="04" /></h3>
        <h4><Saludo nombre="Alef" code="06" /></h4>
      
      </header>
    </div>
  );
}

export default App;
