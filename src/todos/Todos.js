import {Component} from "react";
import "./Todos.css"

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
    this.setState(state => {
      const updated = state.todos.map(value => value.id === todo.id ? todo : value);
      return {todos: updated};
    });
  }

  getData() {
    this.setState({
      todos: [
        {
          "id": this.state.klausurId + 34562624,
          "task": "Zusammenfassung machen",
          "important": true,
          "completed": false
        },
        {
          "id": this.state.klausurId + 24456465,
          "task": "Zusammenfassung machen",
          "important": true,
          "completed": false
        },
        {
          "id": this.state.klausurId + 234523421,
          "task": "Zusammenfassung machen",
          "important": true,
          "completed": true
        }
      ]
    });
  }

  createTodos() {
    return Array.from(this.state.todos).map(todo => {
      const id = todo.id;
      return (
        <div key={id} className={"todo " + (todo.completed ? "completedTodo" : "")}
             onClick={() => this.todoClicked(todo)}>
          <input type={"checkbox"} id={id} defaultChecked={todo.completed}/>
          <label htmlFor={id}>{todo.task}</label>
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
      </div>
    );
  }
}

export default Todos;