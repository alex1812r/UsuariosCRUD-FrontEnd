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

const initialState = {
  usuario: {
    data: null,
    loading: false,
    error: false
  },
  listado: {
    data: [],
    error: false,
    loading: true
  },
  error: false,
  loading: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case BUSCAR_USUARIO:
      return {
        ...state,
        usuario: {
          ...state.usuario,
          data: null,
          loading: true,
          error: false
        }
      };
    case BUSCAR_USUARIO_EXITO:
      return {
        ...state,
        usuario: {
          ...state.usuario,
          data: action.payload,
          loading: false,
          error: false
        }
      };
    case BUSCAR_USUARIO_ERROR:
      return {
        ...state,
        usuario: {
          ...state.usuario,
          loading: false,
          error: action.payload,
        }
      };
    case BUSCAR_LISTA_USUARIOS: 
      return {
        ...state,
        listado: {
          ...state.listado,
          loading: true,
          error: false,
        }
      };
    case BUSCAR_LISTA_USUARIOS_EXITO:
      return {
        ...state,
        listado: {
          ...state.listado,
          loading: false,
          error: false,
          data: action.payload
        }
      }
    case BUSCAR_LISTA_USUARIOS_ERROR:
      return {
        ...state,
        listado: {
          ...state.listado,
          loading: false,
          error: action.payload,
        }
      }
    case REGISTRAR_USUARIO:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case REGISTRAR_USUARIO_EXITO:
      return {
        ...state,
        error: false,
        loading: false,
        listado: {
          ...state.listado,
          data: [...state.listado.data, action.payload]
        }
      };
    case REGISTRAR_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case EDITAR_USUARIO:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case EDITAR_USUARIO_EXITO:
      return {
        ...state,
        loading: false,
        listado: {
          ...state.listado,
          data: state.listado.data.map(user => user._id === action.payload._id
            ? user = action.payload : user)
        }
      };
    case EDITAR_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case ELIMINAR_USUARIO:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case ELIMINAR_USUARIO_EXITO:
      return {
        ...state,
        error: false,
        loading: false,
        listado: {
          ...state.listado,
          data: state.listado.data.filter(user => user._id !== action.payload)
        },
        usuario: {
          ...state.usuario,
          data: null
        }
      };
    case ELIMINAR_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}