import React, { useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
// import MostrarRol from './MostrarRol';
import EditarRol from './EditarRol';
import { useDispatch, useSelector } from 'react-redux';
import { buscarListaRolesAction, buscarRolAction } from '../../redux/rol/actions';

const ListaRoles = () => {
  // DISPATCH
  const dispatch = useDispatch();
  
  // STATE LOCAL
  const [showMostrarRol, setShowMostrarRol] = useState(false);
  const onShow = (id) => {
    dispatch(buscarRolAction(id));
    setShowMostrarRol(true);
  }
  const onHide = () => setShowMostrarRol(false);

  // STATE REDUX
  const roles = useSelector(state => state.rol.listado.data);

  useEffect(() => {
    dispatch(buscarListaRolesAction());
  }, [dispatch]);

  return (
    <Table hover>
      <thead className="thead-light">
        <tr>
          <th>ID</th>
          <th>Rol</th>
          <th>Nivel</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {
          roles.map(rol => (
            <tr key={rol._id}>
              <td>{ rol._id }</td>
              <td>
                <button 
                  onClick={() => onShow(rol._id)}
                  className="boton-link btn-link">
                  { rol.name }
                </button>
              </td>
              <td>{ rol.level }</td>
              <td>0</td>
            </tr>

          ))
        }
        <EditarRol 
          show={showMostrarRol}
          onHide={onHide}
        />
      </tbody>
    </Table>
  );
}
 
export default ListaRoles;
