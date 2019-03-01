//Is string a pangram

function isPangram(string) {
  let compare = 'abcdefghijklmnopqrstuvwxyz'.split('');
  console.log(compare);
  for (let i = 0; i < string.length; i++) {
    let String = string.toLowerCase();
    let letter = String.charAt(i);
    if (compare.indexOf(letter) !== -1) {
      compare.splice(compare.indexOf(letter), 1);
    } else {
      continue;
    }
  }
  if (compare.length === 0) {
    return true;
  } else {
    return false;
  }
}
