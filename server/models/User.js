import mongoose from "mongoose";

const UserShcema = new mongoose.Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true
      },
      password: {
         type: String,
         required: true
      },
      posts: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Post',
      }]
   },
   { timestamps: true},
)

export default mongoose.model('User', UserShcema)