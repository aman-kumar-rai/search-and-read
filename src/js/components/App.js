const React = require('react');

const Header = require('./Header.js');
const MainContainer = require('./MainContainer.js');

class App extends React.Component{
  render(){
    return (
     <React.Fragment>
      <Header />
      <MainContainer />
     </React.Fragment>
    );
  }
}

module.exports = App;