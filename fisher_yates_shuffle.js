// @author Andrey Bodoev
// @date 25 July 2015
// https://www.reddit.com/r/dailyprogrammer/comments/3e0hmh/20150720_challenge_224_easy_shuffling_a_list/


// http://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function prepare(string) {
  var result = shuffle(string.split(' '));

  return result.join(' ');
}

console.log(prepare('1 2 3 4 5 6 7 8'));

console.log(prepare('apple blackberry cherry dragonfruit grapefruit kumquat mango nectarine persimmon raspberry raspberry'));

console.log(prepare('a e i o u'));
