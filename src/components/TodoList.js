import React, {Component} from "react";

// Components import
import TodoForm from './TodoForm.js'
// CSS import
import '../css/components/TodoList.css'
/*
  TodoMVC ✔️
  1. add todo ✔️
  2. display todos ✔️
  3. cross off todo
  4. show number of active todos
  5. delete todo
  <--- EXTRA CREDIT 👇 --->
  6. filter all/active/complete
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

class TodoList extends Component {
  state = {
    todos: []
  }

  addTodo = todo => {
    this.setState(state => ({
      // spread on the right side it adds values to the front
      todos: [
        todo, ...state.todos
      ]
    }))
  }

  render() {
    return (<div className="list">
      {/* Passing addTodos to child to grab values to 'lift the state' */}
      <TodoForm addTodo={this.addTodo}/> {/* Mapping through the array of todos in state */}
      {this.state.todos.map(todo => (<p>{todo.text}</p>))}
    </div>)
  }
}

export default TodoList;
