import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ProductsList from './components/ProductsList';
import Navigation from './components/Navigation';
import ProductView from './pages/ProductView';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/:id" component={ProductView} />
        <ProductsList/>
      </Switch>
    </div>
  </Router>
);

export default App;
