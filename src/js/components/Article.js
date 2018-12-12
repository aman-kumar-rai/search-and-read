const React = require("react");
const PropTypes = require('prop-types');

class Article extends React.Component {
  render() {
    return (
      <p>Article</p>
    );
  }
}

// prop-type check...
Article.propTypes = {
  snippet: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
}

module.exports = Article;
