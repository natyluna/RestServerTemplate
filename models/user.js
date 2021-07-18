const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: [true, "El nombre es obligatorio"] },
  email: {
    type: String,
    required: [true, "El email es obligatoria"],
    unique: true,
  },
  pass: {
    type: String,
    required: [true, "El pass es obligatorio"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true
    
  },
  status: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.toJSON = function(){
   const {__v,pass,...user} = this.toObject();
   return user;
};

module.exports = model("User", userSchema);
