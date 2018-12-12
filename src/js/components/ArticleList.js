const React = require("react");
const PropTypes = require('prop-types');

const Article = require('./Article.js');

class ArticleList extends React.Component {
  render() {
    return (
      <section id="articles-container">
        <h1>Article</h1>
        {
          // docs.snippet -> snippet...
          // docs.web_url -> url...
          // docs._id -> id of the document...
          // docs.headline.main -> heading...
          this.props.docs.map(doc => {
            return <Article snippet={doc.snippet} url={doc.web_url}  key={doc._id} heading={doc.headline.main} />
          })
        }
      </section>
    );
  }
}

// prop-type check...
ArticleList.propTypes = {
  docs: PropTypes.array.isRequired
}

module.exports = ArticleList;
