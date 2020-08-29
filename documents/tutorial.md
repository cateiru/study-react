# React Document Tutorial

## Page

[https://ja.reactjs.org/tutorial/tutorial.html](https://ja.reactjs.org/tutorial/tutorial.html)

## React とは

- ユーザーインターフェイスを構築するためのJavascriptライブラリ
- 複雑なUIを「**コンポーネント**」と呼ばれる小さい独立した部品から組み立てることができる

## `React.Component`サブクラス

```jsx
class ShoppingList extends React.Component {
    render() {
        return (
        	<div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
}
```

- `ShoppingList`
  - Reactコンポーネントのクラス or Reactコンポーネントの型
  - コンポーネントは`props`と呼ばれるパラメータを受け取り、`render`メソッドを通じて表示する。

- JSX
  - `<div />` →`React.createElement('div')`

## サンプルコード

マルバツゲームのサンプルコード

```jsx
// component 1
// 正方形のマス目
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

// componrnt 2
// ボード
class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// component 3
// ゲーム
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
```

