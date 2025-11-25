/* 
  - Main file to run the server
  - No Business Logic here
*/

import dotenv from 'dotenv';
import app from './app.js';

// Load .env variables
dotenv.config();

const port = process.env.PORT || 4000;

// Start the Server
app.listen(port, () => {
  console.log(`Server Listening on PORT ${port}`)
})