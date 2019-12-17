import React, { Component } from 'react';
import { render } from 'react-dom';

import Home from './views/Home';

import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Home />
    );
  }
}

render(<App />, document.getElementById('root'));
