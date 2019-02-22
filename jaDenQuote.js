//input="how are you"
//output="How Are You"

function JadenCased(str) {
  let ans = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1));
  return ans.join(' ');
  // console.log(ans);
}

console.log(JadenCased('how will mirrors'));
