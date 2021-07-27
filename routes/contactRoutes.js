const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactControllers');

router
    .route('/')
    .get(contactController.tousLesContacts)
    .post(contactController.ajouterUnContact);

router
    .route('/:id')
    .get(contactController.rechercherUnContact)
    .put(contactController.modifierUnContact)
    .delete(contactController.supprimerUnContact);


    //on exporte le router en tant que module
module.exports = router;