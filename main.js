/*
  @param ${string[]} arr

  Retrieves missing integers in an array if any.
*/

const check = (arr) => {
  if(!arr instanceof Array) return console.log('You must pass an array.')
  
  let result = 'No missing numbers found.'

  for(let i = 0; i < arr.length; i++) {
    result = (arr[i] + 1 !== arr[i+1] && arr[i+1]) ? `Missing Number: ${arr[i+1] - 1}!` : result
  }

  return result
}

console.log(check([1, 3, 4, 5])) // Missing Number: 2
console.log(check([1, 2, 3])) // No missing numbers found.
