import React from 'react';
import SearchBar from './search_bar'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = "header " + this.props.classes;
    return (
      <div className={classes}>
        <div className="logo">
          <h2>Music Search Engine</h2>
        </div>
        <SearchBar onNewSearch={this.props.onNewSearch} />
      </div>
    );
  }
}

export default Header;
