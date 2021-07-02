import React, { Component } from 'react';

import './App.css';

const prompts = [
  {
    "html": "Testy",
    "text": "Test"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrompt: 0,
      debug: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({debug: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="half">
          <h1>{prompts[this.state.currentPrompt].html}</h1>
          <h3>{this.state.debug}</h3>
        </div>
        <div className="bottom half">
          <textarea onChange={this.handleChange}></textarea>
        </div>
      </div>
    );
  }
}

export default App;
