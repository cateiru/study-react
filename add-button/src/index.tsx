import React, {FormEvent} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {generate} from './generateUrl'
import CopyToClipBoard from 'react-copy-to-clipboard'


interface idols {
  names: string[],
  isCheck: boolean[],
  value: string,
  copied: boolean
}

class CreateURL extends React.Component<{}, idols> {
  constructor(props: {}){
    super(props)
    this.state = {
      names: [],
      isCheck: [false],
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
      return {
        value: generate(state.names),
        isCheck: [true]
      }
    })
  }

  render() {
    return(
      <div>
        <div>
          {this.state.value}
        </div>
        <input type="checkbox" checked={this.state.isCheck[0]} onChange={this.addIdol} data-name="korone" />

        <button onClick={this.addIdol} data-name="korone" id="korone-">
          this click
        </button>
        <CopyToClipBoard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>{this.state.copied ? 'copied' : 'copy'}</button>
        </CopyToClipBoard>
      </div>
    )
  }
}

ReactDOM.render(
  <CreateURL />,
  document.getElementById('root')
);

