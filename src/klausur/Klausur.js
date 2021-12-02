import React from "react";
import "./Klausur.css"
import Todos from "../todos/Todos";

class Klausur extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      titel: props.titel,
      millis: props.millis,
      wetter: props.wetter
    };
  }

  render() {
    return (
      <div className={"klausur"}>
        <div className={"information"}>
          <h1>{this.state.titel}</h1>
          <h4>{new Date(this.state.millis).toLocaleString("de-DE")}</h4>
          <h4>{this.state.wetter}</h4>
        </div>
        <hr className={"separator"}/>
        <Todos/>
      </div>
    );
  }
}

export default Klausur;