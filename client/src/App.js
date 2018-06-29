import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';

// import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
<Provider>      
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
</Provider>
    );
  }
}

export default App;
