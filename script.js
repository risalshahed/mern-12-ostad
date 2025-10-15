// Step 1: deifne the API
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// 2 functions we'll do, 1st we'll fetch the users & then we'll display the users

// Step 2: Select the DOM
const loadingText = document.getElementById('loading');
const userContainer = document.getElementById('user-container');

/* 
try catch block
try ->if successful
catch -> if error
*/

// map vs forEach

// Step 4: display the users
function displayUsers(users) {
  users.forEach(user => {
    const div = document.createElement('div');
    // div.classList.add('user-card');

    div.innerHTML = `
      <h3>Name: ${user.name}</h3>
      <h4>Email: ${user.email}</h4>
      <p>City: ${user.address.city}</p>
    `;

    userContainer.appendChild(div);
  })
}

// Step 3: fetch the users
async function fetchUsers() {
  try {
    const response = await fetch(API_URL);
    // console.log(response);

    // .json(), .body(), .text()
    const users = await response.json();

    loadingText.style.display = 'none';

    // display the users
    displayUsers(users);

  } catch(err) {
    loadingText.textContent = `Error: ${err.message}`
  }
}

fetchUsers();