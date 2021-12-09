import {Component} from "react";
import "./Todos.css"
import AddTodo from "./AddTodo";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      klausurId: props.klausurId,
      todos: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.updateProgress();
  }

  setData(todo) {
    const id = todo.id;
    const params = todo.completed ? "?completed" : "";
    fetch(`http://localhost:3001/update/todo/${id}${params}`, {
      method: "PUT"
    }).then(response => {
      if (response.ok)
        this.setState(state => {
          const updated = state.todos.map(value => value.id === id ? todo : value);
          return {todos: updated};
        });
    }).catch(reason => console.log(reason));
  }

  addData = (todo) => { // function declared is like this, so we can pass it to a child (otherwise this won't be declared properly)
    this.setState(state => {
      const updated = state.todos.concat(todo);
      return {todos: updated};
    });
  }

  removeData(id) {
    this.setState(state => {
      const updated = state.todos.filter(value => value.id !== id);
      return {todos: updated};
    });
  }

  getData() {
    const klausurId = this.state.klausurId;
    fetch(`http://localhost:3001/get/todos/${klausurId}`).then(response => {
      if (response.ok)
        response.json().then(value => {
          this.setState({todos: value.todos});
        });
    }).catch(reason => console.log(reason));
  }

  clickedDelete(id) {
    this.removeData(id);
  }

  createTodos() {
    return Array.from(this.state.todos).map(todo => {
      const id = todo.id;
      return (
        <div key={id} className={"todo " + (todo.completed ? "completedTodo" : "")}
             onClick={() => this.todoClicked(todo)}>
          <input type={"checkbox"} className={"todoCheckbox"} id={id} defaultChecked={todo.completed}/>
          <label htmlFor={id} className={"todoCheckboxLabel"}>{todo.task}</label>
          <FontAwesomeIcon className={"deleteTodo"} icon={faTimes}
                           onClick={() => this.clickedDelete(id)}/>
        </div>
      );
    });
  }

  todoClicked(todo) {
    const checked = !todo.completed;
    document.getElementById(todo.id).checked = checked;
    todo.completed = checked;
    this.setData(todo);
  }

  updateProgress() {
    const progress = document.getElementById("todoProgress-" + this.state.klausurId);
    const todos = this.state.todos;
    progress.max = todos.length;
    progress.value = Array.from(todos).filter(todo => todo.completed).length;
  }

  render() {
    return (
      <div className={"todos"}>
        {this.createTodos()}
        <AddTodo klausurId={this.state.klausurId} addItem={this.addData}/>
      </div>
    );
  }
}

export default Todos;