const React = require("react");
const PropTypes = require('prop-types');

class Image extends React.Component {

  render() {

    let src, uploader, altText, condition = false;

    // if the image object is not null...
    if(this.props.image != null){

      // setting the condition to true
      condition = true;

      src = this.props.image.src;
      uploader = this.props.image.uploader;
      altText = this.props.image.altText;
    }

    return (
      <figure>
        <img src={condition ? src: './../src/images/icon-no-image.png' } alt={condition ? altText : 'No image available'} />
        <figcaption>
          {condition ? uploader : 'No image available'}
        </figcaption>
      </figure>
    );
  }
}

// prop-type check...
Image.propTypes = {
  image: PropTypes.object
}


module.exports = Image;
