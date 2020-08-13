# React 環境構築 How to

## TypeScript or JavaScript

- TypeScriptの場合はwebpackでコンパイルする必要がある。

## 環境構築

```bash
# initialize yarn
yarn init

# add modules
yarn add --dev typescript ts-loader webpack webpack tsc
yarn add @types/react @types/react-dom eslint http-server

# add teconfig.json file
yarn tsc --init

# add webpack.config.js
touch webpack.config.js
```

### webpack.config.js

例:

```js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
```

- mode
  - `development`、`production`、`none`を指定可能
  - [webpack 4 入門](https://qiita.com/soarflat/items/28bf799f7e0335b68186)
- entry
  - ビルドを始める際の開始点となるjsファイル
- output
  - コンパイル後のファイルをどのような名前、場所に出力するか
- module
  - webpackは通常JavaScriptしか変換できないが**loader**を使用することによりさまざまな言語（TypeScriptなど）の変換も対応する
