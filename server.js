//import du module app
const app = require('./app');

//Definition du port d'écoute
const port = 4500;

//définition du port d'écoute du serveur
app.listen(port, () =>{
    console.log(`vos requêtes dispo à l'adresse http://localhost:${port}/api/contacts`)
});