//Watson likes to challenge Sherlock's math ability.
// He will provide a starting and ending value describing a range of integers.
// Sherlock must determine the number of square integers within that range,
// inclusive of the endpoints.


function squares(a, b) {
  if (a > Math.pow(10, 9) || b > Math.pow(10, 9)) {
    return 'Out of Range';
  }
  let c = Math.ceil(Math.sqrt(a));
  let d = Math.floor(Math.sqrt(b));
  let totalSquare = d - c + 1;
  return totalSquare;
}
