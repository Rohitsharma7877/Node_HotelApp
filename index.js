const express = require("express");
const db = require("./config/db");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Welcome to Hotel");
});

//import router
const personRouter = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


//Use routers
app.use('/person', personRouter);
app.use('/menu',menuItemRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});