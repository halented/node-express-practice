exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Slammo' });
}
exports.submit = function (req, res, next) {
    console.log("whats this: ", req.body.lead_email)
    res.redirect('/books')
}