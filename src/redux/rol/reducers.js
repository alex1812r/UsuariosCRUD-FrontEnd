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

const initialState = {
  listado: {
    data: [],
    loading: false,
    error: false
  },
  rol: {
    data: null,
    loading: false,
    error: false
  },
  loading: false,
  error: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case BUSCAR_ROL:
      return {
        ...state,
        rol: {
          ...state.rol,
          loading: true,
          error: false,
          data: null
        }
      };
    case BUSCAR_ROL_EXITO:
      return {
        ...state,
        rol: {
          data: action.payload,
          loading: false,
        }
      }
    case BUSCAR_ROL_ERROR:
      return {
        ...state,
        rol: {
          ...state.rol,
          loading: false,
          error: action.payload
        }
      }
    case BUSCAR_LISTADO_ROLES:
      return {
        ...state,
        listado: {
          ...state.listado,
          loading: true,
          error: false
        }
      };
    case BUSCAR_LISTADO_ROLES_EXITO:
      return {
        ...state,
        listado: {
          ...state.listado,
          data: action.payload,
          loading: false,
        },
      }
    case BUSCAR_LISTADO_ROLES_ERROR:
      return {
        ...state,
        listado: {
          ...state.listado,
          loading: false,
          error: action.payload || true
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
        error: action.payload || true
      }
    case EDITAR_ROL:
      return {
        ...state,
        loading: true,
        error: false
      }
    case EDITAR_ROL_EXITO:
      return {
        ...state,
        loading: false,
        error: true,
        listado: {
          ...state.listado,
          data: state.listado.data.map(rol => rol._id === action.payload._id 
            ? rol = action.payload : rol)
        }
      }
    case EDITAR_ROL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload || true
      }
    case ELIMINAR_ROL:
      return {
        ...state,
        loading: true,
        error: false,
      }
    case ELIMINAR_ROL_EXITO:
      return {
        ...state,
        loading: false,
        rol: {
          ...state.rol,
          data: null
        },
        listado: {
          ...state.listado,
          data: state.listado.data.filter(rol => rol._id !== action.payload)
        }
      }
    case ELIMINAR_ROL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload || true
      }
    default:
      return state;
  }
}