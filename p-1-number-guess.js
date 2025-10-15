/* 
A secret number between 1 to 10
I have to predict this within 5 chances
*/

const secretNumber = 8;

const totalChance = 5;

const guesses = [2, 3, 8, 9, 4];

for(let i = 0; i < totalChance; i++) {
  let userGuess = guesses[i];
  console.log(`Your guess is ${userGuess}`);
  /* 
  if the guess is correct -> console correct
  if guess is greater than secret number -> higher than number
  if guess is less than secret number -> lower than number
  */
  if(userGuess === secretNumber) {
    console.log('Correct guess');
    // break;
    return;
  } else if(userGuess > secretNumber) {
    console.log('higher than number')
  } else if(userGuess < secretNumber) {
    console.log('lower than number')
  }

  if(i === totalChance - 1) {
    console.log('Oh no, your chance is over')
  }
}


/* 
Break works in,
- Loop
- If else statement
- Switch Case

*/

function myFunction(x, y) {
  return x + y;

}