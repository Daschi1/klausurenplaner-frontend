import React from "react";
import "./Klausuren.css"
import Klausur from "../klausur/Klausur";

class Klausuren extends React.Component {

  generateKlausur() {
    const titel = "Hello World";
    const millis = Date.now();
    const wetter = "N/V";
    return Array.from(Array(5).keys()).map(value => <Klausur key={value} titel={titel} millis={millis} wetter={wetter}/>);
  }

  render() {
    return (
      <div className={"klausuren"}>
        {this.generateKlausur()}
      </div>
    );
  }
}

export default Klausuren;