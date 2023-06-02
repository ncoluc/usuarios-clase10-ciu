import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from 'uuid';

const Formulario = ({agregarCliente}) => {
  //Creo un socio vacio y lo inicializo con un hook de estado
  const [socio, editarSocio] = useState({
    nombre: "",
    dni: "",
  });

  //Extraer los valores
  const { nombre, dni } = socio;

  //Creo otro hook de estados para manejar el error
  const [error, setError] = useState(false);

  //Tomamos lo que el usuario escribe en el form
  const handleChange = (e) => {
    editarSocio({
      ...socio,
      [e.target.name]: e.target.value,
    });
    console.log("Tomo los datos...");
  };

  const submitForm = (e) => {
    e.preventDefault();

    //Validar el formulario
    if(nombre.trim() === '' || dni.trim() === ''){
        setError(true);
        return;
    }

    //Mensaje de error (evitar mensaje)
    setError(false);

    //Poner un id
    socio.id = uuid();
    console.log(socio);

    //Guardar el socio
    agregarCliente(socio);

    //Limpiar el formulario
    editarSocio({
        nombre:"",
        dni:""
    })

    console.log("Socio registrado.");
  };

  return (
    <Fragment>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
                type="text" 
                placeholder="Nombre completo" 
                name="nombre" 
                onChange={handleChange} 
                value={nombre} />
        </Form.Group>
        <Form.Group>
          <Form.Label>DNI</Form.Label>
          <Form.Control 
                type="number" 
                placeholder="Sin puntos ni espacios" 
                name="dni" 
                onChange={handleChange} 
                value={dni} />
        </Form.Group>
        <Button 
            variant="primary" 
            type="submit">
            Ingresar Socio
        </Button>
      </Form>
      {
        error && <h4>Completa todos los datos</h4>
      }

    </Fragment>
  );
};

export default Formulario;
