const express = require("express");
const db = require("./config/db");
const bodyParser = require("body-parser");
require("dotenv").config();
const passport = require("./Middleware/Auth");


const app = express();
app.use(express.json());
app.use(bodyParser.json());

//middleware function
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
  );
  next();
};
app.use(logRequest);



app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false })

app.get("/", (req, res) => {
  res.send("Welcome to Hotel");
});

//import router
const personRouter = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
const loginRouter = require("./routes/loginRouter");



//Use routers
app.use("/person",  personRouter);
app.use("/menu",  menuItemRoutes);
app.use("/login", loginRouter); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { // app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
