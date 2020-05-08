const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_KEY,
    callbackURL:"http://localhost:3000"
    },
    function(accessToken, refreshToken, profile, done){
        URLSearchParams.findOrCreate({googleId: profile.id}, function(err, user){
            return done(err, user);
        })
    }
));