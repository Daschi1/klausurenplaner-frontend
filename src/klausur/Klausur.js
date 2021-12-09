import React from "react";
import "./Klausur.css"
import Todos from "../todos/Todos";
import Wetter from "../wetter/Wetter";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Klausur extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: props.id,
      titel: props.titel,
      millis: props.millis
    };
  }

  clickedDelete(id) {
    this.props.removeKlausur(id);
  }

  render() {
    return (
      <div className={"klausur"}>
        <div className={"information"}>
          <FontAwesomeIcon className={"deleteKlausur"} icon={faTimes}
                           onClick={() => this.clickedDelete(this.state.id)}/>
          <h1>{this.state.titel}</h1>
          <h4 className={"klausurDate"}>{new Date(this.state.millis).toLocaleString("de-DE")}</h4>
          <Wetter id={this.state.id}/>
        </div>
        <progress className={"todoProgress"} id={"todoProgress-" + this.state.id} max={100}/>
        <Todos klausurId={this.state.id}/>
      </div>
    );
  }
}

export default Klausur;