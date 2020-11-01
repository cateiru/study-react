# React 大事なところメモ

[TOC]

## 初期設定

```shell
npx create-react-app [project dir] --template typescript
```

## ReactDom.render()

```jsx
import React from 'react'
import ReactDom from 'react-dom'

ReactDOM.render(
	<h1>Hello World!</h1>,
  document.getElementById('root')
)
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <title>React App</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>

</html>
```

## 定期的に更新

```jsx
function tick(){
	const element = (
		<div>
			<h2>It is {new Date().toLocalTimeString()}.</h2>
		</div>
	)
	ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000)
```

## 関数orクラスのコンポーネント

- 関数

  ```jsx
  function Welcome(props){
    return <h1>Hello, {props.name}</h1>
  }
  
  const element = <Welcome name="Sara" />
  ReactDOM.render(
  	element,
    document.getElementById('root')
  )
  ```

- クラス

  ```tsx
  class Welcome extends React.Component<{}, {}> {
    render() {
      return <h1>Hello, {this.props.name}</h1>
    }
  }
  
  const element = <Welcome name="Sara" />
  ReactDOM.render(
  	element,
    document.getElementById('root')
  )
  ```

## コンポーネントからコンポーネントを呼ぶ

```jsx
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function App(){
  return (
  	<div>
    	<Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}

ReactDOM.render(
	<App />,
  document.getElementById('root')
)
```

## 大事なこと

- できるだけ、コンポーネントを小さく分割することが重要。
- すべてのコンポーネントは、自己の`props`に対して純関数（同じ入力に対して同じ結果を返す）であるべき。

## state

```tsx
interface State {
  date: Date
}

class Clock extends React.Component<{}, State> {
  timerID: NodeJS.Timeout | undefined
  
  constructor(props: {}) {
		super(props)
  }
  
  componentDidMount() {
    this.timerID = setInterval(
    	() => this.tick(),
      1000
    )
  }
  
  componrntWillUnmount() {
    if(this.timerID !== undefined) {
			clearInterval(this.timerID)
    }
  }
  
  tick() {
    return (
    	<div>
      	<h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocalTimeString()}.</h2>
      </div>
    )
  }
}

ReactDOM.render(
	<Clock />,
  document.getElementById('root')
)
```



