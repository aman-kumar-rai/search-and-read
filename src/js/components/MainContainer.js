const React = require('react');
const Image = require('./Image.js');
const ArticleList = require('./ArticleList.js');

class MainContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <main id='data-container'>
        <Image />
        <ArticleList />
      </main>
    );
  }
}

module.exports = MainContainer;