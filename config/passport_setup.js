const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
passport.use(
  'googleToken',
  // eslint-disable-next-line new-cap
  new googleStrategy({
    // options for the google strategy
    clientID: '458798047427-f4knaf8lkil08jmib5ud091aqeab54ht.apps.googleusercontent.com',
    clientSecret: 'dE4xOfj0bYlvSCmDACly749L',
    callbackURL: 'http://localhost:3000/google/redirect',
  }),
  // eslint-disable-next-line no-unused-vars
  async (accesToken, refreshToken, profile, done) => {
    // passport callback function
    console.log(accesToken);
    console.log(refreshToken);
    console.log(profile);
  },
);
