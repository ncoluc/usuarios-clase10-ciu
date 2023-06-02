import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Fragment, useState } from "react";
import Formulario from './components/Formulario';
import TablaSocios from './components/TablaSocios';

function App() {

  //Generar un hook de estado vacio con los diferentes clientes de la veterinaria
  const [clientes, editarClientes] = useState([]);

  //Funcion que toma el socio nuevo y lo mete en el array de clientes
  const agregarCliente = (socio) =>{
    editarClientes([
      ...clientes,
      socio
    ]);
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <h1>Usuarios de la Veterinaria</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              agregarCliente = {agregarCliente}
            />
          </Col>
          <Col>
            <h3>Lista de Socios:</h3>
            <TablaSocios
              socios = {clientes}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
