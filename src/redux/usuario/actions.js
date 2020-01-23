import {
  BUSCAR_USUARIO,
  BUSCAR_USUARIO_EXITO,
  BUSCAR_USUARIO_ERROR,
  BUSCAR_LISTA_USUARIOS,
  BUSCAR_LISTA_USUARIOS_EXITO,
  BUSCAR_LISTA_USUARIOS_ERROR,
  REGISTRAR_USUARIO,
  REGISTRAR_USUARIO_EXITO,
  REGISTRAR_USUARIO_ERROR,
  EDITAR_USUARIO,
  EDITAR_USUARIO_EXITO,
  EDITAR_USUARIO_ERROR,
  ELIMINAR_USUARIO,
  ELIMINAR_USUARIO_EXITO,
  ELIMINAR_USUARIO_ERROR
} from './types';

import axios from '../../config/axios';

// ------- BUSCAR USUARIO -------
export function buscarUsuarioAction(id) {
  return dispatch => {
    dispatch(buscarUsuario());
    axios.get(`/users/${id}`)
    .then(({ data }) => {
      if(data.error) {
        dispatch(buscarUsuarioError(data.error.msg));
        return;
      }
      dispatch(buscarUsuarioExito(data.Ok.user));
    })
  };
}

const buscarUsuario = () => ({
  type: BUSCAR_USUARIO
});

const buscarUsuarioExito = usuario => ({
  type: BUSCAR_USUARIO_EXITO,
  payload: usuario,
})

const buscarUsuarioError = error => ({
  type: BUSCAR_USUARIO_ERROR,
  payload: error
})


// ------- BUSCAR LISTA USUARIOs -------
export function buscarListaUsuariosAction() {
  return dispatch => {
    dispatch(buscarListaUsuarios());
    axios.get('/users')
    .then(({ data }) => {
      if (data.error){
        dispatch(buscarListaUsuariosError(data.error.msg));
        return;
      }
      
      dispatch(buscarListaUsuariosExito(data.users));
    })
    .catch(error => {
      dispatch(buscarListaUsuariosError('ERROR DE CONEXION'));
    })
  };
}

const buscarListaUsuarios = () => ({
  type: BUSCAR_LISTA_USUARIOS
});

const buscarListaUsuariosExito = usuarios => ({
  type: BUSCAR_LISTA_USUARIOS_EXITO,
  payload: usuarios,
})

const buscarListaUsuariosError = () => ({
  type: BUSCAR_LISTA_USUARIOS_ERROR, 
})



// ------- REGISTRAR USUARIO -------
export function registrarUsuarioAction(usuario) {
  return dispatch => {
    dispatch(nuevoUsuario());
    axios.post('/users', usuario)
    .then(({ data }) => {
      if (data.error){
        dispatch(nuevoUsuarioError(data.error.msg));
        return;
      }
      dispatch(nuevoUsuarioExito(data.user));
    })
    .catch(error => {
      console.log('error', error);
      dispatch(nuevoUsuarioError('ERROR DE CONEXION'));
    })
  }
}

const nuevoUsuario = () => ({
  type: REGISTRAR_USUARIO,
});

const nuevoUsuarioExito = usuario => ({
  type: REGISTRAR_USUARIO_EXITO,
  payload: usuario
})

const nuevoUsuarioError = error => ({
  type: REGISTRAR_USUARIO_ERROR,
  payload: error
});


// ------- EDITAR USUARIO -------
export function editarUsuarioAction(id, usuario) {
  return dispatch => {
    dispatch(editarUsuario());
    axios.put(`/users/${id}`, usuario)
    .then(({ data }) => {
      if (data.error){
        dispatch(editarUsuarioError(data.error.msg));
        return;
      }
      dispatch(editarUsuarioExito(data.user));
    })
    .catch(error => {
      console.log('error', error);
      dispatch(editarUsuarioError('ERROR DE CONEXION'));
    })
  }
}

const editarUsuario = () => ({
  type: EDITAR_USUARIO,
});

const editarUsuarioExito = usuario => ({
  type: EDITAR_USUARIO_EXITO,
  payload: usuario
})

const editarUsuarioError = error => ({
  type: EDITAR_USUARIO_ERROR,
  payload: error
});

// ------- ELIMINAR USUARIO -------
export function eliminarUsuarioAction(id) {
  return dispatch => {
    dispatch(eliminarUsuario());
    
    axios.delete(`/users/${id}`)
    .then(({ data }) => {
      if (data.error){
        dispatch(eliminarUsuarioError(data.error.msg));
        return;
      }
      dispatch(eliminarUsuarioExito(id));
    })
    .catch(error => {
      console.log('error', error);
      dispatch(eliminarUsuarioError('ERROR DE CONEXION'));
    })
  }
}

const eliminarUsuario = () => ({
  type: ELIMINAR_USUARIO,
});

const eliminarUsuarioExito = usuario => ({
  type: ELIMINAR_USUARIO_EXITO,
  payload: usuario
})

const eliminarUsuarioError = error => ({
  type: ELIMINAR_USUARIO_ERROR,
  payload: error
});