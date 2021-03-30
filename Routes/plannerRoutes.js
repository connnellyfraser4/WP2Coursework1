const express = require('express');
const router = express.Router();
const controller = require('../controllers/plannerController'); 


router.get("/", controller.landing_page);
router.get('/entries', controller.entries_list);
router.get('/new-entry', controller.new_entry); 
router.get('/new', controller.show_new_entries); 
router.post('/new', controller.post_new_entry);

//router.get('/robert',controller.Roberts_entries);


router.get('/planner', function (req, res) {
    res.redirect('/Planner.html');
})
router.get('/new-entry', function (req, res) {
    res.redirect('/new-entry.html');
})

router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})

router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})


module.exports = router;