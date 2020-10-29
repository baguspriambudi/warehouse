const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
passport.use(
  // eslint-disable-next-line new-cap
  new googleStrategy(
    {
      // options for the google strategy
      clientID: '662921520289-54kr8p06vhaq27qriep4bvegefb7h7o7.apps.googleusercontent.com',
      clientSecret: 'z9GB9UaK98KsIASNBicYapj3',
      callbackURL: 'http://localhost:3000/api/v1/user/google/callback',
    },
    // eslint-disable-next-line no-unused-vars
    async (accesToken, refreshToken, profile, done) => {
      // passport callback function
      console.log(accesToken);
      console.log(refreshToken);
      console.log(profile);
      done(null, profile);
    },
  ),
);
