import {Component} from "react";
import {faCheck, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./AddKlausur.css";

class AddKlausur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false
    };
  }

  clickedAdd() {
    if (!this.state.adding)
      this.setState({adding: true});
  }

  clickedConfirm() {
   /* const name = document.getElementById("klausurInputName").value;
    const date = document.getElementById("klausurInputDate").value;
    const plz = document.getElementById("klausurInputPlz").value;*/
    this.disableAdding();
  }

  clickedCancel() {
    this.disableAdding();
  }

  disableAdding() {
    if (this.state.adding) {
      this.setState({adding: false});
      document.getElementById("klausurInputName").value = "";
      document.getElementById("klausurInputDate").value = "";
      document.getElementById("klausurInputPlz").value = "";
    }
  }

  render() {
    return (
      <div className={"klausur addKlausur"} onClick={() => this.clickedAdd()}>
        <div className={"klausurInput " + (this.state.adding ? "" : "invisible")}>
          <h4>Name</h4>
          <input type={"text"} id={"klausurInputName"}/>
          <h4>Datum, Uhrzeit</h4>
          <input type={"datetime-local"} id={"klausurInputDate"}/>
          <h4>PLZ</h4>
          <input type={"text"} id={"klausurInputPlz"}/>
        </div>
        <FontAwesomeIcon className={"addKlausurIcon " + (this.state.adding ? "invisible" : "")} icon={faPlus}/>
        <div className={"klausurOptionButtons " + (this.state.adding ? "" : "invisible")}>
          <FontAwesomeIcon className={"confirmKlausurIcon"} icon={faCheck}
                           onClick={() => this.clickedConfirm()}/>
          <FontAwesomeIcon className={"cancelKlausurIcon"} icon={faTimes}
                           onClick={() => this.clickedCancel()}/>
        </div>
      </div>
    )
  }
}

export default AddKlausur;