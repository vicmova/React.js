import React, {Fragment, useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        code: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()

        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + ' ' + datos.code);
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Name" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Surname" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Code" className="form-control" onChange={handleInputChange} name="code"></input>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
                <li>{datos.code}</li>
            </ul>
        </Fragment>
    );
}
 
export default Formulario;