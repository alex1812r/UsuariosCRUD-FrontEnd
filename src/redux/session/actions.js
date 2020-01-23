import {
  INICIAR_SESSION,
  INICIAR_SESSION_ERROR,
  INICIAR_SESSION_EXITO,
  CERRAR_SESSION,
  VALIDAR_SESSION,
  VALIDAR_SESSION_EXITO,
  VALIEDAR_SESSION_ERROR
} from './types';

import axios from '../../config/axios';

// ------- INICIAR SESSION -------
export function iniciarSesionAction(usuario) {
  return dispatch => {
    dispatch(iniciarSesion());
    axios.post('/login', usuario)
    .then(({ data }) => {
      if(data.error) {
        dispatch(iniciarSesionError(data.error.msg));
        return;
      }
      sessionStorage.setItem('usuario', JSON.stringify(data.user));
      dispatch(iniciarSesionExito(data.user));
    })
    .catch(error => {
      console.log('error : ', error);
      dispatch(iniciarSesionError('Error de conexion'));
    })
  };
}

const iniciarSesion = () => ({
  type: INICIAR_SESSION
});

const iniciarSesionExito = usuario => ({
  type: INICIAR_SESSION_EXITO,
  payload: usuario,
})

const iniciarSesionError = error => ({
  type: INICIAR_SESSION_ERROR,
  payload: error
})



// ------- VALIDAR SESSION EXISTENTE -------
export function validarUsuarioAction(usuario) {
  return dispatch => {
    dispatch(validarUsuario());
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    if(!usuario) {
      dispatch(validarUsuarioError());
    }else {
      dispatch(validarUsuarioExito(usuario));
    }
  };
}

const validarUsuario = () => ({
  type: VALIDAR_SESSION
});

const validarUsuarioExito = usuario => ({
  type: VALIDAR_SESSION_EXITO,
  payload: usuario,
})

const validarUsuarioError = () => ({
  type: VALIEDAR_SESSION_ERROR
})



// ------- CERRAR SESSION -------
export function cerrarSessionAction(usuario) {
  return dispatch => {
    sessionStorage.setItem('usuario', null);
    dispatch(cerrarSession());
  };
}

const cerrarSession = () => ({
  type: CERRAR_SESSION
});