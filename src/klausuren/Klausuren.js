import React from "react";
import "./Klausuren.css"
import Klausur from "../klausur/Klausur";
import AddKlausur from "../klausur/AddKlausur";

class Klausuren extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      klausuren: []
    }
  }

  getData() {
    fetch("http://localhost:3001/get/klausurs").then(response => {
      if (response.ok)
        response.json().then(value => this.setState({klausuren: value.klausurs}));
    }).catch(reason => console.log(reason));
  }

  componentDidMount() {
    this.getData();
  }

  generateKlausur() {
    return Array.from(this.state.klausuren).map(value =>
      <Klausur id={value.klausurId} key={value.klausurId}
               titel={value.name}
               millis={value.date}/>);
  }

  render() {
    return (
      <div className={"klausuren"}>
        {this.generateKlausur()}
        <AddKlausur/>
      </div>
    );
  }
}

export default Klausuren;