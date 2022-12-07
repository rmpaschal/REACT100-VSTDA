import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.updatetodoList = this.updatetodoList.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);

  }

  updatetodoList(todo, index) {
    var newArray = this.state.todoList;
    newArray.splice(index, 1, todo)
    this.setState({
      todoList: newArray
    },() => console.log(this.state.todoList))
  }
  addTodoHandler(todo) {
    var todoListCopy = [...this.state.todoList];
    todoListCopy.push(todo)
    this.setState({
      todoList: todoListCopy
    })
  }
  handleDeleteButton(index) {
    var newArray = this.state.todoList;
    newArray.splice(index, 1)
    this.setState({
      todoList: newArray
    }, () => console.log(this.state.todoList))
  }

  render() {
    return (
      <div className='container'>
        <header className='white page-header'>
          <h1>Very Simple Todo App</h1>
          <h3>Track All of the Things</h3>
        </header>
        <div className='row'>
          <Input
            addTodoHandler={this.addTodoHandler}
            />
            <Output
            list={this.state.todoList}
            updatetodoList={this.updatetodoList}
            handleDeleteButton={this.handleDeleteButton}
            />
        </div>

      </div>
    );
  }
}

export default App;
