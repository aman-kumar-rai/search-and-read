const React = require("react");
const PropTypes = require('prop-types');

const Header = React.forwardRef((props, ref) => {
  return (
    <header>
      <h1 id="search-title">What would you like to read today?</h1>
      <form id="search-form" onSubmit={props.onKeywordSubmit}>
        <label htmlFor="search-input" id="search-label">
          Type to search:{" "}
        </label>
        <input
          type="text"
          id="search-input"
          placeholder="type keyword to search"
          autoFocus
          ref={ref}
        />
        <input type="submit" id="search-submit" />
      </form>
    </header>
  );
});

// prop-type check
Header.propTypes = {
  onKeywordSubmit: PropTypes.func.isRequired
}

module.exports = Header;
