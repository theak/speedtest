import React from 'react';
import ReactDOMServer from 'react-dom/server';

import './App.css';

function stripHtml(html) {
  const str = ReactDOMServer.renderToStaticMarkup(html);
  var txt = document.createElement("textarea");
  txt.innerHTML = str;
  const parts = txt.value.replace(/(<([^>]+)>)/gi, "").split(':');
  return parts[parts.length - 1];
}

const prompts = [
  {html: <p>Hello how are you doing?</p>},
  {html: <p><i>Clear and replace text with:</i>Yo Jason, what's up?</p>, clear: true},
  {html: <p>I would love to catch up. Are you free on Thursday night for a beer?</p>, clear: false},
  {html: <p><i>Change Thursday to Friday:</i>I would love to catch up. Are you free on <b>Friday</b> night for a beer?</p>, clear: true},
  {html: <p><i>Insert cake emoji and party emoji:</i>Saturday it’s my birthday so I want to start the celebration early 🎂🎉</p>, clear: true},
  {html: <p>I will ask Kathryn and John if they want to join as well</p>, clear: true},
  {html: <p>She always talks about calcio</p>, clear: true},
  {html: <p>Anyways, I hope she can join us</p>, clear: true},
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
    if (this.state.taskCompleted) return;
    console.log(event.target.value);
    console.log(prompts[this.state.currentPrompt].text);
    console.log(event.target.value.indexOf(prompts[this.state.currentPrompt].text));
    if (event.target.value.indexOf(prompts[this.state.currentPrompt].text) > -1)
      this.setState({taskCompleted: true, taskTimes: [...this.state.taskTimes, Date.now() - this.state.taskStartTime]});
    //this.setState({debug: event.target.value});
    //[...this.state.taskTimes, Date.now() - this.state.taskStartTime]
  }

  handleNext(event) {
    if (this.state.currentPrompt === -1 || prompts[this.state.currentPrompt].clear)
      document.getElementById("textbox").value = "";
    this.setState({currentPrompt: this.state.currentPrompt + 1, 
      taskCompleted: false, taskStartTime: Date.now()})
  }

  handleFocus(event) {
    event.target.select();
  }

  render() {
    if (this.state.currentPrompt < prompts.length) {
      const next = <Next currentPrompt={this.state.currentPrompt} onClick={this.handleNext}/>;
      const promptIndicator = (this.state.currentPrompt >= 0) ? 
          ((this.state.currentPrompt + 1) + " / " + prompts.length) : '';
      return (
        <div className="App">
          <div className="half">
            <p>{promptIndicator}</p>
            <h1>{(this.state.currentPrompt in prompts) ? prompts[this.state.currentPrompt].html : ''}</h1>
            <h1>{this.state.taskCompleted ? next : ''}</h1>
          </div>
          <div className="bottom half">
            <textarea id="textbox" onChange={this.handleChange}></textarea>
          </div>
        </div>
      );
    }
    else return (
      <div className="App">
        <h1>Done- please copy the information below, enter your participant ID, then tap submit:</h1>
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSdDzSs-JBDvNuYW225c3Dog4grp0oCIdLfWzQyM0egu6Cf6mg/formResponse" target="_self" method="POST" id="mG61Hd" jsmodel="TOfxwf Q91hve" data-response="%.@.[]]" data-first-entry="0" data-last-entry="1" data-is-first-page="true">
          <textarea readOnly name="entry.1431434204" onFocus={this.handleFocus} value={JSON.stringify(this.state.taskTimes)}></textarea>
          <input name="entry.890606469" placeholder="Enter your participant ID here then tap Submit" />
          <input name="entry.26542893" type="hidden" value={navigator.userAgent} />
          <br/><input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

function Next(props) {
  const text = (props.currentPrompt === -1) ? "Tap to start" : "Next";
  return <button onClick={props.onClick} type="button">{text}</button>
}

export default App;
