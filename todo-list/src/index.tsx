import React from 'react';
import ReactDOM from 'react-dom';

interface State {
  todo: number
}

class Todo extends React.Component<{}, State>{
  constructor (props: {}){
    super(props)
    this.state = {todo: 0}

    this.addList = this.addList.bind(this)
  }

  addList() {
    this.setState(state => ({
      todo: this.check(state.todo)
    }))
  }

  check(a: number) {
    if(a >= 10){
      return 0
    }
    return a + 1

  }

  render(){
    return (
      <div>
        <h1>Please input</h1>
        <h2>{this.state.todo}</h2>
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
