## Projeto Microfrontend

Para adicionar um projeto microfontend

*** Instalar as dependencias ***

```bash
npm i babel-loader css-loader node-sass sass-loader single-spa-react style-loader webpack webpack-cli webpack-dev-server

npm i @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react -D

*** Criar os arquivos ***
- webpack.config.js
- .babelrc

*** Atualizar package.json ***

"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack --config webpack.config.js -p",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}

```