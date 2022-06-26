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

//////////////////////////////////////////////////////////
//////////////fichero App.js//////////////////////////////
//////////////////////////////////////////////////////////

import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Saludo mensaje="¿Qué tal estás?" nombre="Alf" code="04" />
      
      </header>
    </div>
  );
}

export default App;
