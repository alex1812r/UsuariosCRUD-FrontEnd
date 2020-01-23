import {
  BUSCAR_ROLES,
  BUSCAR_ROLES_EXITO,
  BUSCAR_ROLES_ERROR,
  CREAR_ROL,
  CREAR_ROL_EXITO,
  CREAR_ROL_ERROR,
} from './types';

const initialState = {
  listado: {
    data: [],
    loading: false,
    error: false
  },
  loading: false,
  error: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case BUSCAR_ROLES:
      return {
        ...state,
        listado: {
          ...state.listado,
          loading: true,
          error: false
        }
      };
    case BUSCAR_ROLES_EXITO:
      return {
        ...state,
        listado: {
          ...state.listado,
          data: action.payload,
          loading: false,
        },
      }
    case BUSCAR_ROLES_ERROR:
      return {
        ...state,
        listado: {
          ...state.listado,
          loading: false,
          error: action.payload
        }
      }
    case CREAR_ROL:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case CREAR_ROL_EXITO:
      return {
        ...state,
        loading: false,
        listado: {
          ...state.listado,
          data: [...state.listado.data, action.payload]
        }
      }
    case CREAR_ROL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}