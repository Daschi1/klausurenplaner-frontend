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
    this.disableAdding();
  }

  clickedCancel() {
    this.disableAdding();
  }

  disableAdding() {
    if (this.state.adding)
      this.setState({adding: false});
  }

  render() {
    return (
      <div className={"klausur addKlausur"} onClick={() => this.clickedAdd()}>
        <div className={"klausurInput " + (this.state.adding ? "" : "invisible")}>
          <input type={"text"}/>
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