import React from 'react';
import HomePageContainer from '../containers/HomePageContainer';

let styles = {
  marginTop: '100px' 
}

const Main = (props) => {
  return (
    <div style={styles}>
      <HomePageContainer />
    </div>
  );
}

export default Main;