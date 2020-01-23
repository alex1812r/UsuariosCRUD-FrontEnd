import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editarRolAction, eliminarRolAction } from '../../redux/rol/actions';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import Spinner from '../Spinner';

const EditarRol = ({ show, onHide }) => {
  // REFS
  const nameRef = useRef();
  const levelRef = useRef();

  // STATE REDUX
  const loading =  useSelector(state => state.rol.rol.loading);
  const rol = useSelector(state => state.rol.rol.data);
  const loadingSending = useSelector(state => state.rol.loading);

  // DISPATCH
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const rolActualizado = {
      name: nameRef.current.value,
      level: levelRef.current.value
    };
    dispatch(editarRolAction(rol._id, rolActualizado));
    onHide();
  }

  const eliminarRol = () => {
    const valid = window.confirm('¿ desea eliminar el rol ?');
    if(valid) {
      dispatch(eliminarRolAction(rol._id));
      onHide();
    }
  };

  return (
    <Modal centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>ROLES</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          loading ?
            <div className="d-flex justify-content-center">
              <Spinner />
            </div>
        : 
          (rol ? 
            <Form onSubmit={onSubmit}>
              <Row>
                <Col md={8}>
                  <Form.Group>
                    <Form.Label>Rol</Form.Label>
                    <Form.Control 
                      type="text"
                      defaultValue={rol.name}
                      ref={nameRef}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nivel</Form.Label>
                    <Form.Control 
                      type="number"
                      min="0"
                      defaultValue={rol.level}
                      ref={levelRef}
                    />
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
                          <Button className="mb-3" type="submit" variant="primary" block>
                            Guardar
                          </Button>

                          <Button onClick={eliminarRol} type="button" variant="primary" block>
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
 
export default EditarRol;

