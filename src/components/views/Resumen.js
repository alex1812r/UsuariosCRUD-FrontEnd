import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ListaAccesos from '../ListaAccesos';
import ListaAcciones from '../ListaAcciones';

const Resumen = () => {
  return (
    <Row>
      <Col md={6}>
        <h4 className="mb-4">Últimos Accesos</h4>
        <ListaAccesos />
      </Col>
      <Col md={6}>
        <h4 className="mb-4">Últimas Acciones</h4>
        <ListaAcciones />
      </Col>
    </Row>
  );
}
 
export default Resumen;