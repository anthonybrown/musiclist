const createError    = require('http-errors');
const express        = require('express');
const path           = require('path');
const favicon        = require('serve-favicon');
const cookieParser   = require('cookie-parser');
const logger         = require('morgan');
const mongoose       = require('mongoose');
const passport       = require('passport');
const LocalStrategy  = require('passport-local').Strategy;
const expressSession = require('express-session')({
  secret: 'random strings are good here',
  resave: false,
  saveUninitialized: false,
});
const User = require('./models/user');

const indexRouter = require('./routes/index');
const api = require('./routes/api/index');
const users = require('./routes/api/users');

const app = express();

// connet to Mongoose
mongoose.connect('mongodb://localhost/musiclist');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', api);
app.use('/api/users', users);

// Configure Passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
