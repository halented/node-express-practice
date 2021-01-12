var express = require('express');
var router = express.Router();
let index = require('../controllers/index')

/* GET home page. */
// the HTTP request here is sending an actual GET to the server, and the res.render (res here is short for respponse) method is in charge of what response is sent back. I have typically worked with sending JSON back as a response, but this is sending back an HTML page (found in the matching views file.)
router.get('/', index.index);

module.exports = router;


// if you wanted to deal with a POST request, you would get data from the browser, tyically do something with it (update DB or s/t), and then call res.redirect() => this method is express specific. after the redirect, there is another GET request. just about 14m in the video