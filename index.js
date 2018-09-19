// add solution here
var players = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i = 0; i < players.length; i++) {
    allPlayers.push(players[i] + " plays " + instruments[i]);
  }
  return allPlayers;
}


function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while(i < facts.length) {
    newFacts.push(facts[i] + "!!!");
  }
  return newFacts;
}
