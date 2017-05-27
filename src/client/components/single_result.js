import React from 'react';

class SingleResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {object: props.object}
  }

  render() {
    let image = this.state.object.image;
    if (this.state.object.image == "") {
      image = "./resources/void.jpg";
    }
    return (
      <div className="single_result">
        <img src={image} />
        <div className="single_result_main">
          <h1>{this.state.object.title}</h1>
          <h2>{this.state.object.subtitle}</h2>
        </div>
        <div className="single_result_detail">
          <h3>{this.state.object.detail}</h3>
        </div>
      </div>
    );
  }
}

export default SingleResult;
