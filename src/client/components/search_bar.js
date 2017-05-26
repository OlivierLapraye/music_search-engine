import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {text: ""};
  }

  onKeyPress(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if (charCode == '13') {
      this.props.onNewSearch(this.state.text);
      this.setState({text: ""});
    }
  }

  render() {
    return (
      <div className="search_bar">
        <input
          value={this.state.text}
          placeholder="Search for a track or an artist"
          onChange={(event) => {this.setState({text: event.target.value})}}
          onKeyPress={this.onKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBar;
