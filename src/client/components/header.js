import React from 'react';
import SearchBar from './search_bar'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = "header";
    if (this.props.classes != "") {
      classes += " header" + this.props.classes;
    }
    return (
      <div className={classes}>
        <div onClick={this.props.onclick} className="logo">
          <h2>Music Search Engine</h2>
        </div>
        <SearchBar
          additionalClassNames={this.props.classes}
          onNewSearch={this.props.onNewSearch}
        />
      </div>
    );
  }
}

export default Header;
