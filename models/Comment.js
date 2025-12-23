import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentText: String,
  user: {
    // user er ID er type -> ObjectId
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }
})

export default mongoose.model('Comment', commentSchema);