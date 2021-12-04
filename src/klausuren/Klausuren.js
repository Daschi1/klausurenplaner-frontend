import React from "react";
import "./Klausuren.css"
import Klausur from "../klausur/Klausur";

class Klausuren extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      klausuren: []
    }
  }

  getData() {
    this.setState({
      klausuren: [
        {
          "id": 121123,
          "name": "BWL",
          "date": 1638621726021,
          "plz": 69469,
          "weather": {
            "main": "Rain",
            "degrees": 19.2
          }
        }, {
          "id": 34234,
          "name": "BWL",
          "date": 1638621726021,
          "plz": 69469,
          "weather": {
            "main": "Thunderstorm",
            "degrees": 19.2
          }
        },
        {
          "id": 14536456,
          "name": "BWL",
          "date": 1638621726021,
          "plz": 69469,
          "weather": {
            "main": "Drizzle",
            "degrees": 19.2
          }
        }
      ]
    })
  }

  componentDidMount() {
    this.getData();
  }

  generateKlausur() {
    return Array.from(this.state.klausuren).map(value => <Klausur id={value.id} key={value.id} titel={value.name}
                                                                  millis={value.date}
                                                                  main={value.weather.main}
                                                                  degrees={value.weather.degrees}/>);
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