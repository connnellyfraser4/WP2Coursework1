const plannerDA0 = require('../models/plannerModel');
const db = new plannerDA0();




exports.entries_list = function (req, res) {

    db.getAllEntries().then((list) => {
        res.render('entries', {
            'title': 'Planner',
            'entries': list
        });
        console.log('promise resolved');
    }).catch((err) => {
        console.log('promise rejected', err);
    })
}


exports.show_new_entries = function (req, res) {
    res.render('newEntry', {
        'title': 'Planner'
    })
}

exports.post_new_entry = function(req, res) {

    if (!req.body.name) {
    response.status(400).send("Entries must have an author.");
    return;
    }
    db.addEntry(req.body.name, req.body.activity, req.body.duration);
    res.redirect('/');
   } 

  

exports.landing_page = function (req, res) {
    db.init();
    db.getAllEntries().then((list) => {
        res.render('entries', {
            'title': 'Planner',
            'entries': list
        });
        console.log('promise resolved');
    }).catch((err) => {
        console.log('promise rejected', err);
    })
}



exports.new_entry = function (req, res) {
    exports.show_new_entries = function (req, res) {
        res.render('newEntry', {
            'title': 'Guest Book'
        })
    }
}


