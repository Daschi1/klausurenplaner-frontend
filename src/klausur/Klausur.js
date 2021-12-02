import React from "react";
import "./Klausur.css"

class Klausur extends React.Component {
  render() {
    return (
      <div className={"klausur"}>
        <p>Titel</p>
        <p>Ort</p>
        <p>Datum</p>
        <p>Wetter</p>
        <p>Todos</p>
      </div>
    );
  }
}

export default Klausur;