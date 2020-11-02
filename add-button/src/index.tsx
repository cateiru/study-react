import React, {FormEvent} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {generate} from './generateUrl'

interface idols {
  names: string[]
}

class CreateURL extends React.Component<idols, idols> {
  constructor(props: idols){
    super(props)
    this.state = {
      names: props.names
    }

    this.addIdol = this.addIdol.bind(this)
  }

  addIdol(event: FormEvent){
    const name = event.currentTarget.getAttribute('data-name')

    if (name !== null && this.state.names.indexOf(name) === -1){
      this.setState(state => {
        return {names: state.names.concat(name)}
      })
    }
  }

  render() {
    return(
      <div>
        <div>
          {generate(this.state.names)}
        </div>
        <button onClick={this.addIdol} data-name="korone">
          this click
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <CreateURL names={[]} />,
  document.getElementById('root')
);

