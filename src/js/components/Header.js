const React = require('react');


class Header extends React.Component{
  render(){
    return (
      <header>
        <h1 id='search-title'>What would you like to read today?</h1>
        <form id='search-form'>
          <label htmlFor='search-input' id='search-label'>Type to search: </label>
          <input type='text' id='search-input' placeholder='type keyword to search' autoFocus/>
          <input type='submit' id='search-submit' />
        </form>
      </header>
    );
  }
}

module.exports = Header;