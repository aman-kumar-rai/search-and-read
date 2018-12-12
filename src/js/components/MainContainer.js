const React = require("react");
const PropTypes = require('prop-types');

const Image = require("./Image.js");
const ArticleList = require("./ArticleList.js");

const MainContainer = props => {
  const {image, docs} = props;
  return (
    <main id="data-container">
      <Image image={image}/>
      <ArticleList docs={docs}/>
    </main>
  );
};

// prop-type check
MainContainer.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    uploader: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }),
  docs: PropTypes.array.isRequired
}

module.exports = MainContainer;
