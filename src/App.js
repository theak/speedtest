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
  //Block 1:
  {html: <p>Hello how are you doing?</p>},
  {html: <p><i>Clear and replace text with:</i>Yo Jason, what's up?</p>, clear: true},
  {html: <p>I would love to catch up. Are you free on Thursday night for a beer?</p>, clear: false},
  {html: <p><i>Change Thursday to Friday:</i>I would love to catch up. Are you free on <b>Friday</b> night for a beer?</p>, clear: true},
  {html: <p><i>Insert cake emoji and party emoji:</i>Saturday it's my birthday so I want to start the celebration early 🎂</p>, clear: true},
  {html: <p>I was thinking we could meet at teske</p>, clear: true},
  {html: <p><i>Take a break, then tap for next prompt when you're ready...</i></p>, break: true},

  //Block 2:
  {html: <p>Hey I have some time off.  Are you interested in going backpacking next weekend?</p>},
  {html: <p><i>Replace weekend with Friday:</i>Hey I have some time off.  Are you interested in going backpacking next <b>Friday</b>?</p>, clear: true},
  {html: <p>I can drive, but my car is acting a bit funky</p>},
  {html: <p><i>Clear and replace text with:</i>My car is acting weird. Can you drive?</p>, clear: true},
  {html: <p>Also you should ask Anne to join.  She is so funny 😂</p>, clear: true},
  {html: <p>I am happy to go anywhere but I was thinking about going to mount monadnock</p>, clear: true},
  {html: <p><i>Take a break, then tap for next prompt when you're ready...</i></p>, break: true},

  //Block 3:
  {html: <p>Can you stop at the grocery store?</p>, clear: true},
  {html: <p>I want to start preparing that dinner for Thursday night.</p>},
  {html: <p><i>Replace "Thursday" with "Wednesday":</i>I want to start preparing that dinner for <b>Wednesday</b> night.</p>, clear: true},
  {html: <p>I want to try and make that new chili recipe.</p>},
  {html: <p><i>Clear and replace with:</i>What do you think about chili?</p>, clear: true},
  {html: <p>I was also thinking about making some paczki for next week</p>, clear: true},
  {html: <p>Thank you ❤️</p>, clear: true},

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
      shouldClear: true,
      taskStartTime: 0,
      taskTimes: [],
      debug: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChange(event) {
    const strip = (str) => str.replaceAll(' ', '').replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
    if (this.state.taskCompleted) return;
    console.log(event.target.value);
    console.log(prompts[this.state.currentPrompt].text);
    if (strip(event.target.value).indexOf(strip(prompts[this.state.currentPrompt].text)) > -1)
      this.setState({taskCompleted: true, taskTimes: [...this.state.taskTimes, Date.now() - this.state.taskStartTime]});
  }

  handleNext(event) {
    this.setState({
      shouldClear: this.state.currentPrompt < 0 || prompts[this.state.currentPrompt].clear,
      taskCompleted: ((this.state.currentPrompt + 1) < prompts.length) && prompts[this.state.currentPrompt + 1].break,
      currentPrompt: this.state.currentPrompt + 1,
      taskStartTime: Date.now()
    }, () => {
      if (this.state.currentPrompt < prompts.length) {
        const textbox = document.getElementById("textbox");
        textbox.blur();
        if (this.state.shouldClear) textbox.value = "";
        textbox.focus();
      }
    });
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
            <p>
              {promptIndicator}
            </p>
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
        <h1>Done- please enter your username then tap submit:</h1>
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSdDzSs-JBDvNuYW225c3Dog4grp0oCIdLfWzQyM0egu6Cf6mg/formResponse" target="_self" method="POST" id="mG61Hd" jsmodel="TOfxwf Q91hve" data-response="%.@.[]]" data-first-entry="0" data-last-entry="1" data-is-first-page="true">
          <textarea readOnly name="entry.1431434204" onFocus={this.handleFocus} value={JSON.stringify(this.state.taskTimes)}></textarea>
          <input name="entry.890606469" placeholder="Enter your username here then tap Submit" />
          <input name="entry.26542893" type="hidden" value={navigator.userAgent} />
          <br/><input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

function Next(props) {
  const text = (props.currentPrompt === -1) ? "Tap to start" : "Tap for next prompt";
  return <button onClick={props.onClick} type="button">{text}</button>
}

export default App;
