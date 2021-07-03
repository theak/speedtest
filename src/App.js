import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';

import './App.css';

function stripHtml(html) {
  const str = ReactDOMServer.renderToStaticMarkup(html);
  return str.replace(/(<([^>]+)>)/gi, "");
}

const prompts = [
  {
    "html": <span>Test</span>
  }
];

for (var i = 0; i < prompts.length; i++) {
  prompts[i].text = stripHtml(prompts[i].html);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrompt: -1,
      taskCompleted: true,
      taskStartTime: 0,
      taskTimes: [],
      debug: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChange(event) {
    if (event.target.value == prompts[this.state.currentPrompt].text)
      this.setState({taskCompleted: true, taskTimes: [...this.state.taskTimes, Date.now() - this.state.taskStartTime]});
    //this.setState({debug: event.target.value});
    //[...this.state.taskTimes, Date.now() - this.state.taskStartTime]
  }

  handleNext(event) {
    this.setState({currentPrompt: this.state.currentPrompt + 1, 
      taskCompleted: false, taskStartTime: Date.now()})
  }

  handleFocus(event) {
    event.target.select();
  }

  render() {
    if (this.state.currentPrompt < prompts.length) {
      const next = <Next currentPrompt={this.state.currentPrompt} onClick={this.handleNext}/>;
      return (
        <div className="App">
          <div className="half">
            <h1>{(this.state.currentPrompt in prompts) ? prompts[this.state.currentPrompt].html : ''}</h1>
            <h1>{this.state.taskCompleted ? next : ''}</h1>
            <h3>{this.state.currentPrompt} {this.state.debug}</h3>
          </div>
          <div className="bottom half">
            <textarea onChange={this.handleChange}></textarea>
          </div>
        </div>
      );
    }
    else return (
      <div className="App">
        <h1>Done- please copy and paste the information below:</h1>
        <textarea readonly onFocus={this.handleFocus}>{JSON.stringify(this.state.taskTimes)}</textarea>
      </div>
    );
  }
}

function Next(props) {
  const text = (props.currentPrompt == -1) ? "Tap to start" : "Next";
  return <button onClick={props.onClick} type="button">{text}</button>
}

export default App;
