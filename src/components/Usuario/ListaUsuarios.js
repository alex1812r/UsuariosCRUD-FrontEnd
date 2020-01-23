import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buscarListaUsuariosAction, buscarUsuarioAction } from '../../redux/usuario/actions';
import { Table, Spinner } from 'react-bootstrap';
import EditarUsuario from './EditarUsuario';

const ListaUsuarios = () => {
  
  
  // DISPATCH
  const dispatch = useDispatch();
  
  // STATE REDUX
  const usuarios = useSelector(state => state.usuario.listado.data);
  const loading = useSelector(state => state.usuario.listado.loading);
  
  useEffect(() => {
    dispatch(buscarListaUsuariosAction());
  }, [dispatch]);
  
  // STATE LOCAL
  const [showMostrarUsuario, setShowMostrarUsuario] = useState(false);
  const onShow = (id) => {
    dispatch( buscarUsuarioAction(id) );
    setShowMostrarUsuario(true);
  }
  const onHide = () => setShowMostrarUsuario(false);

  return (
    <Table hover>
      <thead className="thead-light">
        <tr>
          <th>ID</th>
          <th>Correo / Usuario</th>
          <th>Rol</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {
          loading ? 
            <tr>
              <td colSpan="4" className="d-flex justify-content-center">
                <Spinner />
              </td>
            </tr>
          :
            usuarios.map(usuario => (
              <tr key={usuario._id}>
                <td>{ usuario._id }</td>
                <td>
                  <button 
                    onClick={() => onShow(usuario._id)} 
                    className="btn-link boton-link">
                    { usuario.username }
                  </button>
                  
                </td>
                <td>{ usuario.rol.name }</td>
                <td>{ usuario.status ? 'Activo' : 'Inactivo' }</td>
              </tr>

          ))
        }
        <EditarUsuario
          show={showMostrarUsuario}
          onHide={onHide}
        />
      </tbody>
    </Table>
  );
}
 
export default ListaUsuarios;
