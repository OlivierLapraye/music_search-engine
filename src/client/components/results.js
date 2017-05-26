import React from 'react';
import SingleResult from './single_result';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const resultsList = this.props.results.map((result, idx) => {
      const uniqKey = "result_" + idx + result.title;
      return (
        <SingleResult key={uniqKey} object={result} />
      );
    });
    return (
      <div className="results">
        {resultsList}
      </div>
    );
  }
}

export default Results;
