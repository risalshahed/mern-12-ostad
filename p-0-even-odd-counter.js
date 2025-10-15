/* [12, 23, 35, 48, 61, 40, 13]
koyta even number (Jor Shonkgha)
koyta odd number (Bijor Shongkha)

8 % 3 -> 2 (remainder / vaagshesh)

9 % 3 = 0

*/

function evenOddCounter(nums) {
  let evenCount = 0;
  let oddCount = 0;

  for(let num of nums) {
    if(num % 2 === 0) {
      // evenCount = evenCount + 1;
      // evenCount += 1;
      evenCount++;
    } else if(num % 2 === 1) {
      oddCount++;
    }
  }

  /* for(let num of nums) {
    if(parseInt(num) % 2 === 0) {
      // evenCount = evenCount + 1;
      // evenCount += 1;
      evenCount++;
    } else if(parseInt(num) % 2 === 1) {
      oddCount++;
    }
  } */

  /* for(let num of nums) {
    if(Number(num) % 2 === 0) {
      // evenCount = evenCount + 1;
      // evenCount += 1;
      evenCount++;
    } else if(Number(num) % 2 === 1) {
      oddCount++;
    }
  } */

  console.log(`Total Even Numbers: ${evenCount}`);
  console.log(`Total Odd Numbers: ${oddCount}`);
}

const numbers = [12, 23, 35, 48, 61, 40, 13];

// Argument
// evenOddCounter(['11', '22', '33', '44', '55', '66', '77']);
evenOddCounter(numbers);


// Windows -> Alt + Ctrl + N
// Mac -> Option + Command + N