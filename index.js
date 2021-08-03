import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  receiveDataFromChild = data => {
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <Hello sendDataToParent={this.receiveDataFromChild} />

        {this.state.data}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
