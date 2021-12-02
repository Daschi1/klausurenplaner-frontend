import React from "react";
import "./Klausuren.css"
import Klausur from "../klausur/Klausur";

class Klausuren extends React.Component {
  render() {
    return (
      <div className={"klausuren"}>
        <Klausur/>
        <Klausur/>
        <Klausur/>
        <Klausur/>
        <Klausur/>
      </div>
    );
  }
}

export default Klausuren;