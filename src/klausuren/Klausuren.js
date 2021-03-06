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

  addData = (klausur) => {
    fetch("http://localhost:3001/add/klausur", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(klausur)
    }).then(response => {
      if (response.ok)
        response.json().then(value => this.setState(state => {
          const updated = state.klausuren.concat(value);
          return {klausuren: updated};
        }));
    }).catch(reason => console.log(reason));
  }

  removeData = (id) => {
    fetch(`http://localhost:3001/delete/klausur/${id}`, {method: "DELETE"}).then(response => {
      if (response.ok)
        this.setState(state => {
          const updated = state.klausuren.filter(value => value.klausurId !== id);
          return {klausuren: updated};
        });
    }).catch(reason => console.log(reason));
  }

  componentDidMount() {
    this.getData();
  }

  generateKlausur() {
    return Array.from(this.state.klausuren).sort((a, b) => a.date - b.date).map(value =>
      <Klausur id={value.klausurId} key={value.klausurId}
               titel={value.name}
               millis={value.date}
               removeKlausur={this.removeData}/>);
  }

  render() {
    return (
      <div className={"klausuren"}>
        {this.generateKlausur()}
        <AddKlausur addData={this.addData}/>
      </div>
    );
  }
}

export default Klausuren;