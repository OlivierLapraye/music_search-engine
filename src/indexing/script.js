const indexWords = (type, primaryIdx, secondaryIdx, words) => {
  for (let word of words) {
    const ref = type + "-" + primaryIdx + "-" + secondaryIdx;
    word = word.toUpperCase();
    if (indexObject[word] == undefined) {
      indexObject[word] = [ref];
    }
    else {
      indexObject[word].push(ref);
    }
  }
}

const indexArtist = (idx, artists) => {
  for (let idx2 in artists) {
    const name = artists[idx2].name.replace(/[{()}"',]/g, '');
    const words = name.split(" ");
    indexWords("a", idx, idx2, words);
  }
}

const indexArtists = () => {
  for (let idx = 1; idx <= 10; idx++) {
    const artistsFile = require('../../datasets/artists' + idx + '.json');
    indexArtist(idx, artistsFile.artists.artist);
  }
}

const indexTrack = (idx, tracks) => {
  for (let idx2 in tracks) {
    const track = tracks[idx2];
    const name = track.name.replace(/[{()}"',]/g, '');
    const artist = track.artist.name.replace(/[{()}"',]/g, '');
    const words = [...name.split(" "), ...artist.split(" ")];
    indexWords("t", idx, idx2, words);
  }
}

const indexTracks = () => {
  for (let idx = 1; idx <= 20; idx++) {
    const tracksFile = require('../../datasets/tracks' + idx + '.json');
    indexTrack(idx, tracksFile.tracks.track);
  }
}

const fs = require('fs');
const util = require('util');

var indexObject = [];

const main = () => {
  indexArtists();
  indexTracks();
  const jsonIndexObj = {words : indexObject};
  fs.writeFileSync('./datasets/indexed.json',
    util.inspect(indexObject, {maxArrayLength: null, depth: null}),
    'utf-8');
}
main();
