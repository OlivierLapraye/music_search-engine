import React from 'react';

class SingleResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {object: props.object}
  }

  render() {
    return (
      <div className="single_result">
        <img src={this.state.object.image.href}/>
        <h1>{this.state.object.title}</h1>
      </div>
    );
  }
}

export default SingleResult;
