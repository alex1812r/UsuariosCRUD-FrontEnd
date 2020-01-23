import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ListaUsuarios from '../Usuario/ListaUsuarios';
import NuevoUsuario from '../Usuario/NuevoUsuario';
import ListaRoles from '../Rol/ListaRoles';
import NuevoRol from '../Rol/NuevoRol';

import { useSelector } from 'react-redux';

const Gestion = () => {
  const [showNuevoUsuario, setShowNuevoUsuario] = useState(false);
  const [showNuevoRol, setShowNuevoRol] = useState(false);

  const cantRoles = useSelector(state => state.rol.listado.data.length);
  const cantUsuarios = useSelector(state => state.usuario.listado.data.length);
  return (
    <Row>
      <Col md={2} className="mb-5">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a 
            className="nav-link active mb-4" 
            id="v-pills-usuarios-tab" 
            data-toggle="pill" 
            href="#v-pills-usuario" 
            role="tab" 
            aria-controls="v-pills-usuario" 
            aria-selected="true">
              Usuarios
          </a>
          <a 
            className="nav-link" 
            data-toggle="pill" 
            href="#v-pills-roles" 
            role="tab" 
            aria-controls="v-pills-roles" 
            aria-selected="false">
              Roles
          </a>
        </div>
      </Col>

      
      <Col md={10} className="pl-md-5">
        <div className="tab-content" id="v-pills-tabContent">
          
          <div 
            className="tab-pane fade show active" 
            id="v-pills-usuario" 
            role="tabpanel" 
            aria-labelledby="v-pills-home-tab">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Usuarios ({ cantUsuarios })</h4>
                <Button  
                  onClick={() => setShowNuevoUsuario(true)}
                  variant="secondary">
                    Nuevo
                </Button>
                <NuevoUsuario 
                  show={showNuevoUsuario}
                  onHide={() => setShowNuevoUsuario(false)}
                />
              </div>
              <ListaUsuarios />
          </div>

          
          <div 
            className="tab-pane fade" 
            id="v-pills-roles" 
            role="tabpanel" 
            aria-labelledby="v-pills-profile-tab">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>Roles ({ cantRoles })</h4>
                <Button  
                  onClick={() => setShowNuevoRol(true)}
                  variant="secondary">
                    Nuevo
                </Button>
                <NuevoRol
                  show={showNuevoRol}
                  onHide={() => setShowNuevoRol(false)}
                />
              </div>
              <ListaRoles />
          </div>
          
        </div>
      </Col>
    </Row>
  );
}
 
export default Gestion;