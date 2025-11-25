/* 
  This User Controller,
    - request -> service a pathay
    - response er format maintain kore
*/


import { addUser, getAllUsers } from "../services/user.service.js"

export const getUsers = (req, res) => {
  const users = getAllUsers();

  res.status(200).json({
    success: true,
    data: users
  });
};

export const createUser = (req, res) => {
  // console.log(req.body);
  const newUser = addUser(req.body);

  res.status(201).json({
    success: true,
    data: newUser
  });
};