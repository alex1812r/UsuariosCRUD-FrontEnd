import React from 'react';
import { Table } from 'react-bootstrap';

const ListaAcciones = () => {
  return (
    <Table hover>
      <thead className="thead-light">
        <tr>
          <th>Usuario</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>correo@correo.com</td>
          <td>Crear Cuenta</td>
        </tr>
      </tbody>
    </Table>
  );
}
 
export default ListaAcciones;
