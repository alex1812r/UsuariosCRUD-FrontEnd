import { combineReducers } from 'redux';
import usuarioReducers from './usuario/reducers';
import rolReducers from './rol/reducers';
import sessionReducer from './session/reducers';

export default combineReducers({
  usuario: usuarioReducers,
  rol: rolReducers,
  session: sessionReducer
});