import React, { FormEvent } from 'react';
import ReactDOM from 'react-dom';

interface State {
  todo: string[],
  value: string
}

class Todo extends React.Component<{}, State>{
  constructor (props: {}){
    super(props)
    this.state = {
      todo: [],
      value: ''
    }

    this.addList = this.addList.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.check = this.check.bind(this)
  }

  addList() {
    this.setState(state => ({
      todo: this.check(state.value)
    }))
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState(state => ({
      value: event.target.value
    }))
  }

  check(element: string): string[] {
    const todo = this.state.todo
    if(todo.indexOf(element) === -1){
      todo.push(element)
      return todo
    }
    return todo
  }

  render(){
    return (
      <div>
        <h1>Please input</h1>
        <ul>{this.state.todo}</ul>
        <h2>{this.state.value}</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.addList}>
          Add
        </button>
      </div>
    )
  }

}

ReactDOM.render(
  <Todo />,
  document.getElementById('root')
);
