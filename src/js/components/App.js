const React = require("react");

const Header = require("./Header.js");
const MainContainer = require("./MainContainer.js");
const Loading = require("./Loading.js");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };

    // fixing the this...
    this.getImage = this.getImage.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.onKeywordSubmit = this.onKeywordSubmit.bind(this);

    // creating a ref to be passed to Header component to get access to its input field...
    this.ref = React.createRef();
  }

  getImage(keyword) {
    // make AJAX call to get the image
    const imagePromise = fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${keyword}`,
      {
        headers: {
          Authorization:
            "Client-ID 462d22cae6dd1d4877bb082c9e9c6502893a9bb7305d4bf8f681d13b56d4abc3"
        }
      }
    )
      .then(response => response.json())
      .catch(err => console.log("Something wrong with the request ", err))
      .then(data => console.log(data))
      .catch(err => console.log("Something wrong with the response ", err));
  }

  getArticles(keyword) {
    // make AJAX call to get the articles
    const articlePromise = fetch(
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=e6a9801dab184d89a4d77b94ff44048c`
    )
      .then(response => response.json())
      .catch(err => console.log("Something wrong with the request ", err))
      .then(data => console.log(data))
      .catch(err => console.log("Something wrong with the response ", err));
  }

  onKeywordSubmit(event) {
    // stopping the default form submission action...
    event.preventDefault();

    // storing the keyword...
    const keyword = this.ref.current.value;

    // resetting the input field...
    this.ref.current.value = "";

    // updating the state to render the loading component...
    this.setState({
      loading: true
    });

    // sending the request for image by calling getImage()
    this.getImage(keyword);

    // sending the request for articles by calling getArticles()
    this.getArticles(keyword);
  }

  render() {
    return (
      <React.Fragment>
        <Header ref={this.ref} onKeywordSubmit={this.onKeywordSubmit} />
        {this.state.loading ? <Loading /> : <MainContainer />}
      </React.Fragment>
    );
  }
}

module.exports = App;
