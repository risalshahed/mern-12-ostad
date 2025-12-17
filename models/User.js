import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Add a name kindly']
  },
  email: {
    type: String,
    required: [true, 'Add an email kindly'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Add a password kindly'],
    minLength: 6,
    // Don't Return the Password by default in Database Query
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
});

// vaia -> wbjb -> dsfg
// The_Imitation_Game

/* 
let a;  // declare the variable "a"
a = 5;  // assign the value of "a"
a = a + 2;  // re-assign the value of "a"
*/

// Encrypt the Password before saving
userSchema.pre('save', async function (next) {
  if( ! this.isModified('password') ) return next();
  // else
  const salt = await bcrypt.genSalt(10);
  // console.log(this.password)   // user jei password ta dce
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

// Match the user entered password to the hashed/encrypted password in Database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

export default mongoose.model('User', userSchema);