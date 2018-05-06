import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choicesRemaining: 5
    };
  }

  render() {
    return (
    <div>
      server api: {process.env.REACT_APP_SERVER_API_URL}
    </div>
    );
  }
}

export default HomePage;