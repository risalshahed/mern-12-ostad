const arr = [11, 22, 33, 44, 55];

// forEach mutate the existing array
// map returns a new array, doesn't modify the existing one

arr.forEach((e, i, a) => {
  a[i] = e / 11;
});

console.log(arr);

// const newArr = arr.map(e => e * 2);

// console.log(newArr);