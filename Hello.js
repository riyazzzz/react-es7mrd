import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  sendDataToParent = () => {
    this.props.sendDataToParent(this.state.value);
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.onChange} />
        <button onClick={this.sendDataToParent}>Send Data To Parent</button>
      </div>
    )
  }
}
