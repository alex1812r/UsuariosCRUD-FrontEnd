import React, { useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { iniciarSesionAction } from '../../redux/session/actions';

const IniciarSesion = ({ show, onHide }) => {
  // STATE LOCAL
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // DISPATCH
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(iniciarSesionAction({ username, password }));
    setUsername('');
    setPassword('');
    onHide();
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
              onChange={e => setUsername(e.target.value)}
              value={username}
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