const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
//const mysqlPool = require('./helpers/mysql.helper').mysqlPool;

var session = require('cookie-session');
var cookieParser = require('cookie-parser');

const PORT = 3000

const app = express()

app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false
  }
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoutes = require('./routes/main.route');

app.use((req, res, next) => {
  if(!req.session.redirectUrl && !req.path.includes('/auth')) {
    req.session.redirectUrl = req.originalUrl;
  }
  next();
});

app.use('/', mainRoutes);

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}.`)
);