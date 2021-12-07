import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./AddTodo.css";

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      klausurId: props.klausurId,
      adding: false
    };
  }

  clickedAdd() {
    if (!this.state.adding)
      this.setState({adding: true});
  }

  clickedConfirm() {
    const task = document.getElementById("input" + this.state.klausurId).value;
    const todo = {
      "id": this.state.klausurId + Math.random(),
      "task": task,
      "important": false,
      "completed": false
    };
    this.props.addItem(todo);
    this.disableAdding();
  }

  clickedCancel() {
    this.disableAdding();
  }

  disableAdding() {
    document.getElementById("input" + this.state.klausurId).value = "";
    if (this.state.adding)
      this.setState({adding: false});
  }

  render() {
    return (
      <div className={"todo addTodo"} onClick={() => this.clickedAdd()}>
        <FontAwesomeIcon className={"addTodoIcon " + (this.state.adding ? "invisible" : "")} icon={faPlus}/>
        <input type={"text"} id={"input" + this.state.klausurId}
               className={"inputTodo " + (this.state.adding ? "" : "invisible")}/>
        <div className={"todoOptionButtons " + (this.state.adding ? "" : "invisible")}>
          <FontAwesomeIcon className={"confirmTodoIcon"} icon={faCheck}
                           onClick={() => this.clickedConfirm()}/>
          <FontAwesomeIcon className={"cancelTodoIcon"} icon={faTimes}
                           onClick={() => this.clickedCancel()}/>
        </div>
      </div>
    );
  }
}

export default AddTodo;