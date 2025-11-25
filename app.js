/* 
  - express setup
  - middleware setup
  - register route
  - 404 handler
*/

import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express();

// use a few middlewares & functions

// Parse Incoming JSON
app.use(express.json());

// register the routes
app.use('/api/users', userRoutes);


// Handle the undefined routes (Write at the bottom after defining every routes)
// app.use('*', the_others)     Previously, this was the way to handle undefined routes in Express
// The new solution to handle undefined routes in Express
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found'
  })
})

export default app;


// MVC -> Model View Controller