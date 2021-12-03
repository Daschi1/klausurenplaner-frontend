import React from "react";
import "./Klausur.css"
import Todos from "../todos/Todos";

class Klausur extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: props.id,
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
        <progress className={"todoProgress"} id={"todoProgress-" + this.state.id} max={100}/>
        <Todos klausurId={this.state.id}/>
      </div>
    );
  }
}

export default Klausur;