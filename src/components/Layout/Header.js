import React, {useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import IniciarSesion from '../Usuario/IniciarSesion';

const Header = () => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const onShow = () => setShow(true);
  const onHide = () => setShow(false);
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
            <li className={`nav-item ${ pathname === '/gestion' ? 'active' : '' }` }>
              <Link to="/gestion" className="nav-link" href="#!">Gestión</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${ show ? 'active' : '' }`}>
              <IniciarSesion 
                show={show}
                onHide={onHide}
              />
              <Link to={pathname} onClick={onShow} className="nav-link" > LOGIN</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
  
 export default Header;