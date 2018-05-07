import React from 'react';
import HomePage from './HomePage';

let styles = {
  marginTop: '100px' 
}

const Main = (props) => {
  return (
    <div style={styles}>
      <HomePage />
    </div>
  );
}

export default Main;