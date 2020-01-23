import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validarUsuarioAction, cerrarSessionAction } from '../../redux/session/actions';
import { Link, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import IniciarSesion from '../Usuario/IniciarSesion';
import Spinner from '../Spinner';

const Header = () => {
  // PATH ACTUAL
  const { pathname } = useLocation();
  // STATE LOCAL
  const [show, setShow] = useState(false);
  // STATE REDUX
  const loadingSession = useSelector(state => state.session.loading);
  const session = useSelector(state => state.session.usuario);
  // DISPATCH
  const dispatch = useDispatch();

  const onShow = () => setShow(true);
  const onHide = () => setShow(false);
  const cerrarSession = () => dispatch(cerrarSessionAction());
 

  useEffect(() => {
    dispatch(validarUsuarioAction());
  }, [dispatch]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container fluid>
        <a className="navbar-brand" href="#!">LOGO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${ pathname === '/' ? 'active' : '' }`}>
              <Link to="/" className="nav-link">Resumen</Link>
            </li>
            {
              session &&
                <li className={`nav-item ${ pathname === '/gestion' ? 'active' : '' }` }>
                  <Link to="/gestion" className="nav-link" href="#!">Gestión</Link>
                </li>
            }
          </ul>
          <ul className="navbar-nav ml-auto">
            {
              session &&
                <li className="nav-item">
                  <p className="mt-2">{ session.username }</p>
                </li>
            }
            <li className={`nav-item ${ show ? 'active' : '' }`}>
              <IniciarSesion 
                show={show}
                onHide={onHide}
              />

              {
                loadingSession ? <Spinner size="sm" />

                : (session ?
                    <Link to={pathname} onClick={cerrarSession} className="nav-link"> CERRAR SESSION</Link>
                  :
                    <Link to={pathname} onClick={onShow} className="nav-link" > LOGIN</Link> 
                )
              }
              
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
  
 export default Header;