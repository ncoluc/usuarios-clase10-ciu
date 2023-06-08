import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Fragment, useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import TablaSocios from "./components/TablaSocios";

function App() {
  //Iniciamos nuestro local storage
  let clientesGuardados = JSON.parse(localStorage.getItem("clientes"));
  if (!clientesGuardados) {
    clientesGuardados = [];
  }

  //Generar un hook de estado vacio con los diferentes clientes de la veterinaria
  const [clientes, editarClientes] = useState(clientesGuardados);

  //Funcion que toma el socio nuevo y lo mete en el array de clientes
  const agregarCliente = (socio) => {
    editarClientes([...clientes, socio]);
  };

  //Funcion para borrar cliente
  const eliminarSocio = (id) => {
    const nuevosClientes = clientes.filter((cliente) => cliente.id !== id);
    editarClientes(nuevosClientes);
  };

  //Hook useEffect: Sirve para ejecutar alguna funcionalidad cuando hay un cambio
  //en alguna variable/hook/situacion
  useEffect(() => {
    if (clientesGuardados) {
      localStorage.setItem("clientes", JSON.stringify(clientes));
    } else {
      localStorage.setItem("clientes", JSON.stringify([]));
    }
  }, [clientesGuardados]);

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
            <Formulario agregarCliente={agregarCliente} />
          </Col>
          <Col>
            <h3>Lista de Socios:</h3>
            <TablaSocios socios={clientes} eliminarSocio={eliminarSocio} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
