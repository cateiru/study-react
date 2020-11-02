import React, {FormEvent} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {generate} from './generateUrl'
import CopyToClipBoard from 'react-copy-to-clipboard'


interface idols {
  names: string[],
  value: string,
  copied: boolean
}

class CreateURL extends React.Component<{}, idols> {
  constructor(props: {}){
    super(props)
    this.state = {
      names: [],
      value: '',
      copied: false
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

    this.setState(state => {
      return {value: generate(state.names)}
    })
  }

  render() {
    return(
      <div>
        <div>
          {this.state.value}
        </div>
        <button onClick={this.addIdol} data-name="korone">
          this click
        </button>
        <CopyToClipBoard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipBoard>
      </div>
    )
  }
}

ReactDOM.render(
  <CreateURL />,
  document.getElementById('root')
);

