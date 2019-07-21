import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Products from './Products';

class App extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    // try catch just to make sure we had no errors
    try {
      const res = await fetch('http://5b35ede16005b00014c5dc86.mockapi.io/list');
      // wait for json to be ready
      const productsList = await res.json();
      // setting our state to the data result which is just a property on that object
      this.setState({
        products: productsList.data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Route path="test" component={Test} />
          {/* iterating over that array */}
          {this.state.products.map(product => <Products key={product.id} products={product.attributes} />)}
        </div>
      </Router>
    );
  }
}
export default App;

const Test = () => (
  <div>
    Hello
  </div>
);
