const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');

passport.use(
  // eslint-disable-next-line new-cap
  new googleStrategy({
    // options for the google strategy
  }),
  () => {
    // passport callback function
  },
);
