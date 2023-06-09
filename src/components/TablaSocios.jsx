import React, { Fragment } from "react";
import { Table, Button } from "react-bootstrap";

const TablaSocios = ({ socios, eliminarSocio }) => {
  //Listar socios


  const listarSocios = (socios) => {
    return socios.map((socio, index) => (
      <tr key={socio.id}>
        <td>{index + 1}</td>
        <td>{socio.id}</td>
        <td>{socio.nombre}</td>
        <td>{socio.dni}</td>
        <td>
          <Button variant="danger" onClick={() => eliminarSocio(socio.id)}>
            Eliminar
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <Fragment>
      {socios.length === 0 ? (
        <p>No hay socios registrados.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Nombre</th>
              <th>DNI</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>{listarSocios(socios)}</tbody>
        </Table>
      )}
    </Fragment>
  );
};

export default TablaSocios;
