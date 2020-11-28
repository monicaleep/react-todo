import React, { Component } from 'react';
import shortid from 'shortid' // auto generates a random id for the todos
export default class TodoForm extends Component {
  state = {
    text: ''
  };
  handleChange = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault()
    // access the addTodo function from the parent using `this.props`
    this.props.addTodo({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    // clear text after user enters
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='text'
          value={this.state.text}
          onChange={this.handleChange}
          placeholder='todo...'>
          </input>
          <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  };

};
