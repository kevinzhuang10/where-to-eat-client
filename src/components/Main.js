import React from 'react';
import RecommendContainer from '../containers/RecommendContainer';

let styles = {
  marginTop: '100px' 
}

const Main = (props) => {
  return (
    <div style={styles}>
      <RecommendContainer />
    </div>
  );
}

export default Main;