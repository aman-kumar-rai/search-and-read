const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');

const App = require('./components/App.js');


function render(){
  ReactDOM.render(<App />, document.querySelector('#app'));
}

// initially rendering the App...
render();