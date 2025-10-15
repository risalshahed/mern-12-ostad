/* 
What is Factorial?
Positive Integer er Factorial mane, oi number ta "1" porjonto multiply korbo
5! -> Factorial of 5

0! = 1

1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1

4! = 4 * 3!
5! = 5 * 4!

n! = n * (n - 1)!
*/



function factorialWithRecursive(n) {
  if(n < 0) {
    return "Negative Number Not Allowed";
  }
  if(n === 0 || n === 1) {
    return 1;
  }
  // else
  return n * factorialWithRecursive(n - 1);
}

console.log(factorialWithRecursive(5));