/* 
Fibonacci Number Series

First Number is 0 & Second is 1
Prottek Number hosse tar ager 2 ta number er Jogfol


0, 1, 1, 2, 3, 5, 8, 13, ... ... ...

*/

// getFibonacciSeries(7) -> Fibonacci series er prothom 7 ta number dekhao

function getFibonacciSeries(n) {
  if(n < 0) {
    return 'Please enter a Positive Number'
  }

  let series = [0, 1];
  // Slice Method of Array
  for(let i = 2; i < n; i++) {
    // newValue = 0 + 1
    series[i] = series[i - 2] + series[i - 1];
    // console.log(series);
  }


  return series.slice(0, n);
}
/* 
series = [0, 1];
for loop, when, i = 2,
series[2] = series[0] + series[1] // 0 + 1 = 1
At the end of i = 2 -> series = [0, 1, 1]
for loop, when, i = 3,
series[3] = series[1] + series[2] // 1 + 1 = 2
At the end of i = 3 -> series = [0, 1, 1, 2]
*/

// console.log(getFibonacciSeries(6));
const fibSeries = getFibonacciSeries(8);

console.log(fibSeries);

// Task
// Say, a Function findNumberInFibonacciSeries(the_number)
// when CALL the function -> findNumberInFibonacciSeries(5) -> Print the 5th Number in the Series