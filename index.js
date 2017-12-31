const express = require('express');
const mongoose = require('mongoose');
const cookieSesion = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSesion({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

var port = process.env.PORT || 8080;


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});