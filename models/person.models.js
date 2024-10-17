const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    required: true,
    enum: ["chef", "waiter", "manager", "owner"],
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
   username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
});

personSchema.pre('save', async function (next) {
  const person = this;

  if (!person.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(person.password, salt);
    person.password = hashedPassword; // Update the password with the hashed version
    next();
  } catch (err) {
    return next(err);
  }
});

// How hash work?
// password - rohit----> jhsbjsahdjsahajsvdalkdg +salt
// enter wrong password --> sharma
// ( jhsbjsahdjsahajsvdalkdg) ----> extract salt
// salt + sharma ----> hash ---> wewiiwiiwiueruiiwu
// compare this (wewiiwiiwiueruiiwu) or this is correct (jhsbjsahdjsahajsvdalkdg)

personSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
