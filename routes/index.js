var express = require('express');
var router = express.Router();
let landing = require('../controllers/landing')

/* GET home page. */
// the HTTP request here is sending an actual GET to the server, and the res.render (res here is short for respponse) method is in charge of what response is sent back. I have typically worked with sending JSON back as a response, but this is sending back an HTML page (found in the matching views file.)
router.get('/', landing.get_landing);
router.post('/', landing.submit);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_single_lead);
// shows the form
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
// actually submits the edit
router.post('/lead/:lead_id/edit', landing.submit_edit_lead);

module.exports = router;


// if you wanted to deal with a POST request, you would get data from the browser, tyically do something with it (update DB or s/t), and then call res.redirect() => this method is express specific. after the redirect, there is another GET request. just about 14m in the video