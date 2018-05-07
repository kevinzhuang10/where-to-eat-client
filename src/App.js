import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
