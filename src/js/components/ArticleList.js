const React = require("react");
const Article = require('./Article.js');

class ArticleList extends React.Component {
  render() {
    return (
      <section id="articles-container">
        <Article />
      </section>
    );
  }
}

module.exports = ArticleList;
