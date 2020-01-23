import React, { useState } from 'react';
import { Modal, Form, Button , Row, Col} from 'react-bootstrap';
import Spinner from '../Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { registrarRolAction } from '../../redux/rol/actions';

const NuevoRol = ({ show, onHide }) => {
  // STATE LOCAL
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');

  // DISPATCH
  const dispatch = useDispatch();

  // STATE REDUX
  const loading = useSelector(state => state.rol.loading);

  const onSubmit = e => {
    e.preventDefault();
    const rol  = { name, level };
    dispatch(registrarRolAction(rol));
    setName('');
    setLevel('');
  }

  return (
    <Modal centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>ROLES</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col md={8}>
              <Form.Group>
                <Form.Label>Rol</Form.Label>
                <Form.Control 
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nivel</Form.Label>
                <Form.Control 
                  type="number"
                  min="0"
                  value={level}
                  onChange={e => setLevel(e.target.value)}
                />
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
                    <Button type="submit" variant="primary" block>
                      Guardar
                    </Button>
                }
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
 
export default NuevoRol;
