import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Tell Me Where To Eat</h1>
          </header>
          <HomePage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
