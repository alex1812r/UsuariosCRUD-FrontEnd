import {
  BUSCAR_ROL,
  BUSCAR_ROL_EXITO,
  BUSCAR_ROL_ERROR,
  BUSCAR_LISTADO_ROLES,
  BUSCAR_LISTADO_ROLES_EXITO,
  BUSCAR_LISTADO_ROLES_ERROR,
  CREAR_ROL,
  CREAR_ROL_EXITO,
  CREAR_ROL_ERROR,
  EDITAR_ROL,
  EDITAR_ROL_EXITO,
  EDITAR_ROL_ERROR,
  ELIMINAR_ROL,
  ELIMINAR_ROL_EXITO,
  ELIMINAR_ROL_ERROR
} from './types';

import axios from '../../config/axios';


// -------- BUSCAR ROL --------
export function buscarRolAction(id) {
  return dispatch => {
    dispatch(buscarRol());

    axios.get(`/roles/${id}`)
    .then(({ data }) => {
      if(data.error) {
        dispatch(buscarRolError(data.error.msg));
        return;
      }
      dispatch(buscarRolExito(data.rol));
    })
    .catch(error => {
      console.log('error : ', error);
      dispatch(buscarRolError('EROR DE CONEXION'));
    });

  };
}

const buscarRol = () => ({
  type: BUSCAR_ROL
});

const buscarRolExito = rol => ({
  type: BUSCAR_ROL_EXITO,
  payload: rol,
});

const buscarRolError = error => ({
  type: BUSCAR_ROL_ERROR,
  payload: error,
});



// -------- BUSCAR LISTADO ROLES --------
export function buscarListaRolesAction() {
  return dispatch => {
    dispatch(buscarListaRoles());

    axios.get('/roles')
    .then(resultado => dispatch(bucsarListaRolesExito(resultado.data.roles)))
    .catch(error => {
      console.log('error : ', error);
      dispatch(buscarListaRolesError('error al obtener roles'));
    });

  };
}

const buscarListaRoles = () => ({
  type: BUSCAR_LISTADO_ROLES
});

const bucsarListaRolesExito = roles => ({
  type: BUSCAR_LISTADO_ROLES_EXITO,
  payload: roles,
});

const buscarListaRolesError = error => ({
  type: BUSCAR_LISTADO_ROLES_ERROR,
  payload: error,
});



// -------- CREAR ROL --------
export function registrarRolAction(rol) {
  return dispatch => {
    dispatch(registrarRol());
    axios.post('/roles', rol)
    .then(({ data }) => {
      if(data.error){
        dispatch(registrarRolError(data.error.msg));
        return;
      }
      dispatch(registrarRolExito(data.rol));
    })
    .catch(error => {
      console.log('error : ', error);
      dispatch(registrarRolError('error al enviar rol'));
    });

  };
}

const registrarRol = () => ({
  type: CREAR_ROL
});

const registrarRolExito = rol => ({
  type: CREAR_ROL_EXITO,
  payload: rol,
});

const registrarRolError = error => ({
  type: CREAR_ROL_ERROR,
  payload: error,
});



// -------- EDITAR ROL --------
export function editarRolAction(id, rol) {
  return dispatch => {
    dispatch(editarRol());
    axios.put(`/roles/${id}`, rol)
    .then(({ data }) => {
      if(data.error){
        dispatch(editarRolError(data.error.msg));
        return;
      }
      dispatch(editarRolExito(data.rol));
    })
    .catch(error => {
      console.log('error : ', error);
      dispatch(editarRolError('error al enviar rol'));
    });

  };
}

const editarRol = () => ({
  type: EDITAR_ROL
});

const editarRolExito = rol => ({
  type: EDITAR_ROL_EXITO,
  payload: rol,
});

const editarRolError = error => ({
  type: EDITAR_ROL_ERROR,
  payload: error,
});



// -------- ELIMINAR ROL --------
export function eliminarRolAction(id) {
  return dispatch => {
    dispatch(eliminarRol());
    axios.delete(`/roles/${id}`)
    .then(({ data }) => {
      if(data.error){
        dispatch(eliminarRolError(data.error.msg));
        return;
      }
      dispatch(eliminarRolExito(id));
    })
    .catch(error => {
      console.log('error : ', error);
      dispatch(eliminarRolError('error al enviar rol'));
    });

  };
}

const eliminarRol = () => ({
  type: ELIMINAR_ROL
});

const eliminarRolExito = rol => ({
  type: ELIMINAR_ROL_EXITO,
  payload: rol,
});

const eliminarRolError = error => ({
  type: ELIMINAR_ROL_ERROR,
  payload: error,
});
