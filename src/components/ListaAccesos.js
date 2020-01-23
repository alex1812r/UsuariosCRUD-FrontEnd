import React from 'react';
import { Table } from 'react-bootstrap';

const ListaAccesos = () => {
  return (
    <Table hover>
      <thead className="thead-light border">
        <tr> 
          <th>Usuario</th>
          <th>Fecha / Hora</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>correo@correo.com</td>
          <td>23/01/2020</td>
        </tr>
      </tbody>
    </Table>
  );
}
 
export default ListaAccesos;