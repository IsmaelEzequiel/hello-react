import React, ReacDOM, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <nav>
          <ul>
            <li>home</li>
          </ul>
        </nav>
      </div>
    )
  }
}

class HelloReact extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    },
    this.handlerText = this.handlerText.bind(this);
  }

  handlerText(event) {
    this.setState({
      text: event.target.value.ToUpperCase()
    });
  }

  render() {
    return(
      <div>
        <input 
          onChange={ this.handlerText }
          value={ this.state.text } type="text"
        />
        <h1>{ this.state.text }<h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Header />
  <HelloReact />,
  document.getElementById("root")
);
