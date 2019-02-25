//votes provided as an array of candidate names.
// count votes for each RTCIceCandidate.
//Return candidate name with highest vote count.
//If more than 1 candidate with highest count, the candidates arraged alphabetically and candidate last in the queue is returned.

function electionWinner(votes) {
  const counts = Object.create(null);
  votes.forEach(vote => {
    counts[vote] = counts[vote] ? counts[vote] + 1 : 1;
  });
  let values = Object.values(counts);
  let highestCount = Math.max(...values);
  let HighestVoteCandidate = Object.keys(counts).filter(function(key) {
    return counts[key] === highestCount;
  });
  if (HighestVoteCandidate.length === 1) {
    return HighestVoteCandidate;
  } else {
    HighestVoteCandidate.sort();
    return HighestVoteCandidate.pop();
  }
}

console.log(electionWinner(['Joe', 'Mary', 'Joe', 'Mary', 'Mike', 'Mike']));
