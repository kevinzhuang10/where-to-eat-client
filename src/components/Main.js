import React from 'react';
import { Route, Switch } from 'react-router'
import RecommendContainer from '../containers/RecommendContainer';

let styles = {
  marginTop: '100px' 
}

const Main = (props) => {
  return (
    <div style={styles}>
      <Switch>
        <Route exact path="/" component={RecommendContainer}/>
      </Switch>
    </div>
  );
}

export default Main;