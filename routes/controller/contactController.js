const Contact = require('../models/contactModel');

exports.tousLesContacts = function (req, res){
    res.json({
        "message": "GET OK"
    })
};

exports.ajouterUnContact = function (req, res){
    res.json({
        "message": "POST OK"
    })
};

exports.modifierUnContact = function (req, res){
    res.json({
        "message": `put d'id ${req.params.id} ok`
    })
};

exports.rechercherUnContact = function (req, res){
    res.json({
        "message": `get d'id ${req.params.id} ok`
    })
};

exports.supprimerUnContact = function (req, res){
    res.json({
        "message": `delete d'id ${req.params.id} ok`
    })
};