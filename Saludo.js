//recibe props definidos en App.js
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