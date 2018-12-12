const React = require("react");

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('Inside Image render() ',this.props);
    return <section id="img-container" />;
  }
}

module.exports = Image;
