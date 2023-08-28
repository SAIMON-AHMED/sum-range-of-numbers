/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
 The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

function sumAll(arr) {

  arr.sort(function(a, b) {  // first sorting so that smallest num at index o, and largest one at the last index
    return a - b;
  });

  let sum = 0;
  let len = arr.length;
  for (let i = arr[0]; i <= arr[len - 1]; i++) {  // run a for loop in the range and add all of the nums in between the range
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));  // prints 10
