import React, { useState } from 'react';
import { Modal, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registrarUsuarioAction } from '../../redux/usuario/actions';
import Spinner from '../Spinner';

const NuevoUsuario = ({ show, onHide }) => {
  // STATE LOCAL
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rolId, setRolId] = useState('');
  const [status, setStatus] = useState(false);
  
  // DISPATCH
  const dispatch = useDispatch();
  
  // STATE REDUX
  const roles = useSelector(state => state.rol.listado.data);
  const loading = useSelector( state => state.usuario.loading);
  const error = useSelector( state => state.usuario.error);

  const onSubmit = e => {
    e.preventDefault();
    const usuario = { 
      username, 
      password, 
      rolId,
      status
    };
    
    dispatch( registrarUsuarioAction(usuario) );
    
    // RESETEAR STATE LOCAL
    setUsername('');
    setPassword('');
    setRolId('');
    setStatus(false);
    onHide();
  }

  return (
    <Modal centered show={show} onHide={onHide} >
      <Modal.Header closeButton>
        <Modal.Title>Usuarios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={8}>
              <Form.Group>
                <Form.Label>Correo / Usuario</Form.Label>
                <Form.Control 
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  disabled={loading}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Rol</Form.Label>
                <Form.Control 
                  as="select" 
                  value={rolId} 
                  onChange={e => setRolId(e.target.value)}
                  disabled={loading}
                  required>
                  <option disabled value="">-- Seleccionar --</option>
                  {
                    roles.map(rol => (
                      <option key={rol._id} value={rol._id}>{ rol.name }</option>
                    ))
                  }
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <div className="custom-control custom-checkbox">
                  <input 
                    type="checkbox" 
                    className="custom-control-input" 
                    id="customCheck1"
                    checked={status}
                    disabled={loading}
                    onChange={e => setStatus(!status) }
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">Activo</label>
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label><br /></Form.Label>
                {
                  loading ?
                    <div className="d-flex justify-content-center">
                      <Spinner size="sm" /> 
                    </div>
                  :
                  <Button block type="submit">
                    Guardar
                  </Button>
                }
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      {
        error && 
          <Modal.Footer>
            <Alert variant="danger" className="w-100">
              { error }
            </Alert>
          </Modal.Footer>
      }
    </Modal>
  );
}
 
export default NuevoUsuario;
