
const router = require("express").Router();
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'P1W0cgiiR0inKGh9JYlty1FFO',
  consumer_secret: 'VsQtDnusGJrGDFpRB8WTs1wIKbGYYZzJ200YIkhLHRQj6apUVJ',
  bearer_token: "AAAAAAAAAAAAAAAAAAAAAPF1%2BQAAAAAA5nnHqs8mtuTGENA1i0aJJ6ovZHE%3DWkz1XObzIRYbbJORPQlleU7lTqAQFidBcZfXVFF8o0HCil0VyH"
});

// var client = new Twitter({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
// });

// {
//     "token_type":"bearer",
//     "access_token":"AAAAAAAAAAAAAAAAAAAAAPF1%2BQAAAAAA5nnHqs8mtuTGENA1i0aJJ6ovZHE%3DWkz1XObzIRYbbJORPQlleU7lTqAQFidBcZfXVFF8o0HCil0VyH"
// }

router.get("/", (req, res) => {
    var params = {screen_name: 'bootcamptweeter', count: "10", excludes_replies: "false"};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log(error);
        }
        else {
            res.json({ tweets });
        }
    });
    client.get('statuses/mentions_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log(error);
        }
        else {
            res.json({ tweets });
        }
    });
});

module.exports = router;


 



