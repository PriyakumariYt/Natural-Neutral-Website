import mongoose from "mongoose";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
},
email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
 
})
userSchema.pre("save", async function(next) {
    try {
      if (this.isModified("password")) {
        console.log(`the current password is without bycrpt ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`the current password is ${this.password}`);
      }
      next();
    } catch (error) {
      console.error('Error during password hashing:', error);
    //   next();
    }
  });

  userSchema.methods.generateToken = async function() {
    try {
      const token = jwt.sign({
        userid: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      }, process.env.SECRET_KEY);
  
      this.tokens = this.tokens.concat({ token });
      await this.save();
  
      return token;
    } catch (error) {
      console.error('Token generation failed:', error);
      throw new Error('Token generation failed');
    }
  };
  
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;