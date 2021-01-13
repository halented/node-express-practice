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
        .then(data => {
            res.render('landing', { leads: data, title: "Hockeystick" })
        })
}

exports.show_single_lead = function (req, res, next) {
    // query the db for lead with the parameter that comes through the url :lead_id
    // params live inside the req argument
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead', { lead: lead })
    }).catch(err => {
        res.render('lead', { error: "Who knows" })
    })
}


exports.show_edit_lead = function (req, res, next) {
    // This should render a form
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/edit_lead', { lead: lead })
    }).catch(err => {
        res.render('landing', { error: "Who knows" })
    })
}

exports.submit_edit_lead = function (req, res, next) {
    // This should receive input from the from inside the...body? or the params
    // and edit the correct lead with some sequelize method like lead.edit({email: req.body.lead_email})
    return models.Lead.update({
        email: req.body.lead_email
    }, {
        where: {
            id: req.params.lead_id
        }
    }).then(results => {
        // i believe he said you actually get the number of successfully edited entries back, not the lead itself?
        res.redirect('/lead/'+req.params.lead_id)
    }).catch(err => {
        res.render('landing', { error: "Who knows" })
    })
}

exports.delete_lead = function (req, res, next) {
    // destroy single lead
    return models.Lead.destroy({
        where: {
            id: req.params.lead_id
        }
    }).then(results => {
        res.render('landing', {message: "Entry Deleted"})
    }).catch(err => {
        res.render('landing', { error: "Who knows" })
    })
}

exports.delete_lead_json = function (req, res, next) {
    // destroy single lead using json
    return models.Lead.destroy({
        where: {
            id: req.params.lead_id
        }
    }).then(results => {
        res.send({message: "Success"})
    }).catch(err => {
        res.render('landing', { error: "Who knows" })
    })
}