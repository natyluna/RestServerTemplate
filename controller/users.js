const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const getUsers = async (req, res = response) => {
  const { limite = 5, desde = 0 } = req.query;

  const [total, users] = await Promise.all([
    User.find({ status: true }).countDocuments(),
    User.find({ status: true }).limit(Number(limite)).skip(Number(desde)),
  ]);
  res.json({
    total,
    users,
  });
};

const postUsers = async (req, res = response) => {
  const { google, ...data } = req.body;
  const user = new User(data);

  const existUser = await User.findOne({ email: user.email });

  if (existUser) {
    return res.json({
      msg: "Error el Email ingresado ya existe!",
    });
  }

  const salt = bcrypt.genSaltSync();
  user.pass = bcrypt.hashSync(data.pass, salt);

  await user.save();

  res.json({
    body: user,
  });
};

const putUsers = async (req, res = response) => {
  const { id } = req.params;
  const { _id, email, google, pass, ...userPut } = req.body;

  if (pass) {
    const salt = bcrypt.genSaltSync();
    user.pass = bcrypt.hashSync(data.pass, salt);
  }

  const user = await User.findByIdAndUpdate(id, userPut);

  res.json({
    user,
  });
};

const deleteUsers = async(req, res = response) => {
    
  const { id } = req.params;
 
  const user = await User.findByIdAndUpdate(id,{status:false});

  res.json({
    user
  });
};

module.exports = {
  getUsers,
  deleteUsers,
  postUsers,
  putUsers,
};
