const React = require("react");

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onKeywordSubmit = this.onKeywordSubmit.bind(this);
  }

  onKeywordSubmit(event) {
    event.preventDefault();

    // saving the value so that we can use it in our api calls...
    const keyword = this.input.value;

    // resetting the input field, it's a DOM api operation...
    this.input.value = "";

    // we first need to validate the input here, and i might use regex for that...

 
  


  }

  render() {
    return (
      <header>
        <h1 id="search-title">What would you like to read today?</h1>
        <form id="search-form" onSubmit={this.onKeywordSubmit}>
          <label htmlFor="search-input" id="search-label">
            Type to search:{" "}
          </label>
          <input
            type="text"
            id="search-input"
            placeholder="type keyword to search"
            autoFocus
            ref={node => (this.input = node)}
          />
          <input type="submit" id="search-submit" />
        </form>
      </header>
    );
  }
}

module.exports = Header;
