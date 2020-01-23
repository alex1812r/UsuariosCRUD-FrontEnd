import React, { useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from '../../config/axios';

const IniciarSesion = ({ show, onHide }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    const resultado = await axios.get('/users');
    console.log('resultado :', resultado);
  };
  
  return (
    <Modal show={show} centered onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>LOGIN</Modal.Title>
      </Modal.Header>
      <Modal.Body className="py-4">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Correo / Usuario</Form.Label>
            <Form.Control 
              type="text" 
              onChange={e => setUsuario(e.target.value)}
              value={usuario}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              onChange={e => setPassword(e.target.value)}
              value={password}
              required
            />
          </Form.Group>

          <Button 
            type="submit" 
            variant="primary"
            className="float-right mt-4">
              Acceder
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
 
export default IniciarSesion;