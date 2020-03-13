import React, { Component } from 'react';
import logo from '../../static/images/saklogo.jpg';
import MainComponent from './MainComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MainComponent />;
  }
}

export default App;
