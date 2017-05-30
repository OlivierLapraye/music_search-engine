import React from 'react';
import Header from './header';
import Results from './results';
import IndexFile from '../../../datasets/indexed.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {results: []};
  }

  backToVoid() {
    this.setState({results: []});
  }

  getReferences(search) {
    search = search.replace(/[{()}"',;]/g, '').toUpperCase();
    const searchWords = search.split(" ").filter((e) => {
      return e != "";
    });
    if (search.length < 1 || searchWords.length < 1) {
      this.setState({results: []});
      return;
    }

    // Finding matching entries in the index
    let results = [];
    for (let word of searchWords) {
      if (IndexFile.words[word] == undefined) {
        continue;
      }
      for (let ref of IndexFile.words[word]) {
        if (results[ref] == undefined) {
          results[ref] = 0;
        }
        results[ref] += 1;
      }
    }

    // Removing low-matching entries
    const highResults = [];
    let count = searchWords.length;
    for (let ref in results) {
      if (results[ref] == count) {
        highResults.push(ref);
      }
    }

    // If no "perfect match", select lower entries
    count -= 1;
    if (highResults.length == 0) {
      for (let ref in results) {
        if (results[ref] == count) {
          highResults.push(ref);
        }
      }
    }

    return (highResults);
  }

  setResults(references) {
    let newResults = [];
    for (let reference of references) {
      const splitRef = reference.split("-");
      let type = "artists";
      if (splitRef[0] == "t") {
        type = "tracks";
      }
      const filename = `${type}${splitRef[1]}.json`;
      const data = require('../../../datasets/' + filename);

      if (type == "artists") {
        const artist = data.artists.artist[splitRef[2]];
        const newObject = {
          "title": artist.name,
          "subtitle": "Artist",
          "detail": "",
          "image": artist.image[3]['#text']
        }
        newResults.push(newObject);
      }
      else {
        const track = data.tracks.track[splitRef[2]];
        const trackDuration = track.duration;
        let duration = "0:00";
        if (trackDuration != 0) {
          const min = Math.floor(trackDuration / 60);
          let sec = trackDuration % 60;
          if (`${sec}`.length == 1) {
            sec = "0" + sec;
          }
          duration = min + ":" + sec;
        }
        const newObject = {
          "title": track.name,
          "subtitle": "by " + track.artist.name,
          "detail": duration,
          "image": track.image[3]['#text']
        }
        newResults.push(newObject);
      }
    }
    this.setState({results: newResults});
  }

  onNewSearch(search) {
    const references = this.getReferences(search);
    if (references == undefined) {
      this.setState({results: []});
      return;
    }
    this.setResults(references);
  }

  render() {
    let additionalClassNames = "--display_search";
    if (this.state.results.length < 1) {
      additionalClassNames = "";
    }
    return (
      <div>
        <Header
          onclick={this.backToVoid.bind(this)}
          classes={additionalClassNames}
          onNewSearch={this.onNewSearch.bind(this)}
        />
        <div className="result_container">
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
