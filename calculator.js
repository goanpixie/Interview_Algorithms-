function addbits(s) {
  var total = 0,
    s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
  while (s.length) {
    total += parseFloat(s.shift());
  }
  return total;
}

var string = '1+23+4+5-30';
console.log(addbits(string));
