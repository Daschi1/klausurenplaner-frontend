import {Component} from "react";
import "./Todos.css"

class Todos extends Component {

  createTodos() {
    return Array.from(Array(11).keys()).map(value => {
      const id = Math.random().toString();
      return (
        <div key={value} className={"todo"} onClick={() => {
          const box = document.getElementById(id);
          const checked = box.checked;
          box.checked = !checked;
          if (!checked)
            document.getElementById(id).parentElement.classList.add("completedTodo");
          else
            document.getElementById(id).parentElement.classList.remove("completedTodo");
        }}>
          <input type={"checkbox"} id={id}/>
          <label htmlFor={id}>Lorem ipsum dolor sit amit</label>
        </div>
      );
    });
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