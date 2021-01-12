const models = require('../models')

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Slammo' });
}
exports.submit = function (req, res, next) {
    console.log("whats this: ", req.body.lead_email)

    // create is a sequelize method
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/')
    })
}