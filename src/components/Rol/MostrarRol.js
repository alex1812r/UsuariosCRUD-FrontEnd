import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import Spinner from '../Spinner';
import { useSelector } from 'react-redux';

const MostrarRol = ({ show, onHide }) => {
  const rol = useSelector(state => state.rol.rol.data);
  const loading = useSelector(state => state.rol.rol.loading);
  return (
    <Modal size="sm" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>ROLES</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          loading ?
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
          : (rol ?
              <>
                <Form.Group>
                  <Form.Label>Rol</Form.Label>
                  <Form.Control 
                    type="text"
                    value={ rol.name }
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nivel</Form.Label>
                  <Form.Control 
                    type="text"
                    value={ rol.level }
                    disabled
                  />
                </Form.Group>
              </>

              :null
            )
        }
      </Modal.Body>
    </Modal>
  );
}
 
export default MostrarRol;
