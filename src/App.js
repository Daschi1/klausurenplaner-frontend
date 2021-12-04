import React from "react";
import "./App.css"
import Klausuren from "./klausuren/Klausuren";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      response: "-",
      headers: "-"
    };
  }

  /* componentDidMount() {
     document.title = `You clicked ${this.state.count} times`;

   }

   componentDidUpdate() {
     document.title = `You clicked ${this.state.count} times`;
   }


   testRequest() {
     fetch("google.com").then(value => this.setState({response: value.status, headers: value.headers}));
   }*/

  render() {
    return (
      <div className={"app"}>
        <Klausuren/>
      </div>
      /*<div className={"hidden"}>
            <p>You clicked {this.state.count} times</p>
            <button onClick={() => {
              this.setState({count: this.state.count + 1});
              this.testRequest();
            }}>
              Click me
            </button>
            <p>State: {this.state.response}</p>
            <p>Headers: {this.state.headers}</p>
          </div>*/
    );
  }
}

export default App;
