const React = require("react");

const Loading = props => {
  return (
    <div id='loading'>
      <img src='./../src/images/loading.gif' alt='loading' />
      <p id='loading-text'>{props.loadingText}</p>
    </div>
  );
};

// setting the default props for the loading component...
Loading.defaultProps = {
  loadingText: 'Loading'
}

module.exports = Loading;
