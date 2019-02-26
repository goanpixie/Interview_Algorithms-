//Valid parenthesis:

function validParentheses(parens) {
  const dict = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  newArr = [];
  if (
    parens.charAt(0) == '}' ||
    parens.charAt(0) == ']' ||
    parens.charAt(0) == ')'
  ) {
    return false;
  }

  for (let i = 0; i < parens.length; i++) {
    if (
      parens.charAt(i) == '{' ||
      parens.charAt(i) == '[' ||
      parens.charAt(i) == '('
    ) {
      console.log('opening parenthesis');
      newArr.push(parens.charAt(i));
      console.log('newArr', newArr);
    } else {
      console.log('closing parenthesis');

      let key = Object.keys(dict).filter(function(key) {
        return dict[key] === parens.charAt(i);
      });
      let matchingPair = key;
      console.log('matchingPair', matchingPair);
      let lastElement = newArr[newArr.length - 1];
      console.log('lastElement', lastElement);
      if (lastElement == matchingPair) {
        console.log('yes');
        newArr.pop();
        console.log('newArr post pop()', newArr);
      } else {
        return false;
      }
    }
  }
  if (newArr.length === 0) {
    console.log('empty array');
    return true;
  } else {
    return false;
  }
}
console.log(validParentheses('(('));
