const express = require("express");
const db = require("./config/db");
const bodyParser = require("body-parser");


const app = express();

app.use(express.json());
app.use(bodyParser.json());


app.get("/", () => {
  res.send("Welcome to Hotel");
});

//import router
const personRouter = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');


//Use routers
app.use('/person', personRouter);
app.use('/menu',menuItemRoutes);




app.listen(3000, () => {
  console.log("running on port 3000");
});
