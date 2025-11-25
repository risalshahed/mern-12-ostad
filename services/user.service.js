/* 
  This User Service,
    - is actual Data Handling / Business Logic
    - keeps the "controller" clean
*/

let users = [];

// return all users
export const getAllUsers = () => {
  return users;
}

// add a new user
export const addUser = (user) => {
  /* 
    user = { name: 'Zakir', email: 'zakir@test.com' }
  */
  const newUser = {
    // id: Date.now(),
    id: crypto.randomUUID(),
    ...user
    /* name: 'name',
    email: 'email' */
  }

  users.push(newUser);

  return newUser;
}