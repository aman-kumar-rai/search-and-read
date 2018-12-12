const React = require("react");
const PropTypes = require('prop-types');

const Article = require('./Article.js');

class ArticleList extends React.Component {
  render() {
    return (
      <section id="articles-container">
      {
        //looping over the docs array to render an Article component for each... 
      }
        { this.props.docs.map(doc => {
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
