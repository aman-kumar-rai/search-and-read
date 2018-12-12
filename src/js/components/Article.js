const React = require("react");
const PropTypes = require('prop-types');

class Article extends React.Component {
  render() {
    // destructuring props...
    const {snippet, url, heading} = this.props;

    // removing trailing and starting p tag...
    // we will write code for this later???????????????????????????
    return (
      <article className='article'>
        <h2 className='article-heading'><a href={url} className='article-link'>{heading}</a></h2>
        <p className='article-content'>{snippet}</p>
      </article>
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
