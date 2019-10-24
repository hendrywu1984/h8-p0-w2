function xo(str) {
  // you can only write your code here!
  var sumX, sumY;

  sumX = 0;
  sumY = 0;

  for(var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'x' || str.charAt(i) === 'X') {
        sumX += 1;
    } else if(str.charAt(i) === 'o' || str.charAt(i) === 'O') {
        sumY += 1;
    }
  }

  if (sumX === sumY) return true;
  else return false;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true