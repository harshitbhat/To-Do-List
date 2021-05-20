import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  update(id, newTask) {
    const updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updateTodos });
  }
  toggleCompletion(id) {
    const updateTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updateTodos });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        task={todo.task}
        removeTodo={this.remove}
        updateTodo={this.update}
        completed={todo.completed}
        id={todo.id}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List<span>A Simple React Todo List</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
