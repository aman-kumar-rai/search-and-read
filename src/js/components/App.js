const React = require("react");

const Header = require("./Header.js");
const MainContainer = require("./MainContainer.js");
const Loading = require("./Loading.js");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      image: null,
      docs: []
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
      .then(data => {
        // checking to see if the response has the desired data...
        if (data && data.results && data.results.length >= 1) {
          const image = data.results[0];

          const src = image.urls.regular;
          const uploader = image.user.name;
          const altText = image.description;

          // setting the image property of the state to the data that we retrieved...
         this.setState(prevState => {
           return {
             image: {
               src, 
               uploader,
               altText
             },
             loading: false
           }
         })
        }
        // if the searched keyword does not return any image...
        else{
          this.setState(prevState => {
            return {
              image: null,
              loading: false
            }
          });
        }
      })
      .catch(err => console.log("Something wrong with the response ", err));
  }

  getArticles(keyword) {
    // make AJAX call to get the articles
    const articlePromise = fetch(
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=e6a9801dab184d89a4d77b94ff44048c`
    )
      .then(response => response.json())
      .catch(err => console.log("Something wrong with the request ", err))
      .then(data => {
        if (
          data.response &&
          data.response.docs &&
          data.response.docs.length >= 1
        ) {
          // setting the docs property of state to the data received...
          this.setState(prevState => {
            return {
              docs: data.response.docs,
              loading: false
            }
          });

        }
        // if the searched keyword does not return docs...
        else{
          this.setState(prevState => {
            return {
              docs: [],
              loading: false
            }
          });
        }


      })
      .catch(err => console.log("Something wrong with the response ", err));
  }

  onKeywordSubmit(event) {
    // stopping the default form submission action...
    event.preventDefault();
    // storing the keyword...
    const keyword = this.ref.current.value;

    // not firing AJAX request if input is emtpy...
    // we will later add regex based check on input in here...
    if(!keyword.trim()){
      return;
    }

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
    // destructuring required variables from state...
    const {loading, image, docs } = this.state;

    return (
      <React.Fragment>
        <Header ref={this.ref} onKeywordSubmit={this.onKeywordSubmit} />
        {loading ? <Loading /> : <MainContainer image={image} docs={docs} />}
      </React.Fragment>
    );
  }
}

module.exports = App;
