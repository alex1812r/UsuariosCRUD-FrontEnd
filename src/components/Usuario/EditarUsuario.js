import React, { useRef } from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { editarUsuarioAction, eliminarUsuarioAction } from '../../redux/usuario/actions';
import Spinner from '../Spinner';

const EditarUsuario = ({ show, onHide }) => {
  // REFS
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rolIdRef = useRef();
  const statusRef = useRef();

  // DISPATCH
  const dispatch = useDispatch();

  // STATE REDUX
  const usuario = useSelector(state => state.usuario.usuario.data);
  const roles = useSelector(state => state.rol.listado.data);
  const loading = useSelector(state => state.usuario.usuario.loading);
  const loadingSending = useSelector(state => state.usuario.loading);

  const onSubmit = e => {
    e.preventDefault();
    const usuarioActualizado = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      rolId: rolIdRef.current.value,
      status: statusRef.current.checked,
    };
    dispatch(editarUsuarioAction(usuario._id, usuarioActualizado));
    onHide();
  };

  const eliminarUsuario  = () => {
    const valid = window.confirm('¿desea eliminar este usuario?');
    if(valid) {
      dispatch(eliminarUsuarioAction(usuario._id));
      onHide();
    }
  }

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
              <Form onSubmit={onSubmit}>
                <Row>
                  <Col md={8}>
                    <Form.Group>
                      <Form.Label>Correo / Usuario</Form.Label>
                      <Form.Control 
                        type="text"
                        defaultValue={usuario.username}
                        ref={usernameRef}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control 
                        type="text"
                        defaultValue={usuario.password}
                        ref={passwordRef}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Rol</Form.Label>
                      <Form.Control 
                        as="select" 
                        defaultValue={usuario.rol._id}
                        ref={rolIdRef}
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
                          id="customCheck2"
                          defaultChecked={usuario.status}
                          ref={statusRef}
                        />
                        <label className="custom-control-label" htmlFor="customCheck2">Activo</label>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label><br /></Form.Label>
                      {
                        loadingSending ?
                          <div className="d-flex justify-content-center">
                            <Spinner size="sm" /> 
                          </div>
                        :
                        <>
                        <Button className="mb-3" block type="submit">
                          Guardar
                        </Button>
                        <Button onClick={eliminarUsuario} block type="button">
                          Eliminar
                        </Button>
                        </>
                      }
                    </Form.Group>
                  </Col>
                </Row>
              </Form>

              : null
            )
        }
      </Modal.Body>
    </Modal>
  );
}
 
export default EditarUsuario;