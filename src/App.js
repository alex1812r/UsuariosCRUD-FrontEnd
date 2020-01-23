import React from 'react';

// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

// ROUTER
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

// COMPONENTES
import { Container } from 'react-bootstrap';
import Header from './components/Layout/Header';
import Resumen from './components/views/Resumen';
import Gestion from './components/views/Gestion';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Container className="mt-5">
          <Switch>
            <Route exact path="/" component={Resumen} />
            <Route exact path="/gestion" component={Gestion} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
