import {
  INICIAR_SESSION,
  INICIAR_SESSION_ERROR,
  INICIAR_SESSION_EXITO,
  CERRAR_SESSION,
  VALIDAR_SESSION,
  VALIDAR_SESSION_EXITO,
  VALIEDAR_SESSION_ERROR
} from './types';

const initialState = {
  usuario: null,
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case INICIAR_SESSION:
      return {
        ...state,
        usuario: null,
        loading: true,
        error: false
      }
    case INICIAR_SESSION_EXITO:
      return {
        ...state,
        usuario: action.payload,
        loading: false
      };
    case INICIAR_SESSION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload || true
      }
    case VALIDAR_SESSION: {
      return {
        ...state,
        loading: false,
        usuario: null,
      }
    }
    case VALIDAR_SESSION_EXITO:
      return {
        ...state,
        loading: false,
        usuario: action.payload
      }
    case VALIEDAR_SESSION_ERROR:
      return {
        ...state,
        loading: false,
      }
    case CERRAR_SESSION:
      return {
        ...state,
        usuario: null,
      };
    default:
      return state;
  }
}