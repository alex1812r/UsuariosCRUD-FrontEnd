import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';

const MostrarUsuario = ({ show, onHide }) => {
  const usuario = useSelector(state => state.usuario.usuario.data);
  const loading = useSelector(state => state.usuario.usuario.loading);
  return (
    <Modal centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>USUARIOS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          loading ?
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          : 
            (usuario ?  
              <>          
                <Form.Group>
                  <Form.Label>Correo / Usuario</Form.Label>
                  <Form.Control 
                    type="text"
                    value={usuario.username}
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control 
                    type="text"
                    value={usuario.password}
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Rol</Form.Label>
                  <Form.Control 
                    type="text"
                    value={usuario.rol.name}
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <div className="custom-control custom-checkbox">
                    <input 
                      type="checkbox" 
                      className="custom-control-input"
                      id="customCheck2"
                      checked={usuario.status}
                      disabled
                    />
                    <label className="custom-control-label" htmlFor="customCheck2">Activo</label>
                  </div>
                </Form.Group>
              </>
              : null
            )
        }
      </Modal.Body>
    </Modal>
  );
}
 
export default MostrarUsuario;

