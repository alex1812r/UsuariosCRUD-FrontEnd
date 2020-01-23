import React, { useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { buscarListaRolesAction } from '../../redux/rol/actions';

const ListaRoles = () => {
  // DISPATCH
  const dispatch = useDispatch();
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
                <button className="boton-link btn-link">
                  { rol.name }
                </button>
              </td>
              <td>{ rol.level }</td>
              <td>0</td>
            </tr>

          ))
        }
      </tbody>
    </Table>
  );
}
 
export default ListaRoles;
