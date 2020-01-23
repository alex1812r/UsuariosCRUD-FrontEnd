import {
  BUSCAR_ROLES,
  BUSCAR_ROLES_EXITO,
  BUSCAR_ROLES_ERROR,
  CREAR_ROL,
  CREAR_ROL_EXITO,
  CREAR_ROL_ERROR,
} from './types';

import axios from '../../config/axios';

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
  type: BUSCAR_ROLES
});

const bucsarListaRolesExito = roles => ({
  type: BUSCAR_ROLES_EXITO,
  payload: roles,
});

const buscarListaRolesError = error => ({
  type: BUSCAR_ROLES_ERROR,
  payload: error,
});


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
      dispatch(buscarListaRolesError('error al enviar rol'));
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