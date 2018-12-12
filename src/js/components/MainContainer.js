const React = require("react");
const Image = require("./Image.js");
const ArticleList = require("./ArticleList.js");

const MainContainer = props => {
  console.log(props);
  return (
    <main id="data-container">
      <Image />
      <ArticleList />
    </main>
  );
};

module.exports = MainContainer;
