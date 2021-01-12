const models = require('../models')

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Slammo' });
}

exports.submit = function (req, res, next) {
    console.log("whats this: ", req.body.lead_email)

    // create is a sequelize method, can infer that it operates with promises here
    return models.Lead.create({
        email: req.body.lead_email
    }).then(lead => {
        res.redirect('/leads')
    })
}

exports.show_leads = function (req, res, next) {
    // we will need to fetch from the database here. findAll is  a sequelize method
    models.Lead.findAll()
        .then(data => res.render('landing', { leads: data, title: "Hockeystick"}))
}