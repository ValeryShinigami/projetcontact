const mongoose = require('mongoose');

const protocole = "mongodb";
const server = 'localhost:21017';
const database = 'ContactDb';
const dbUrl = `${protocole}://${server}/${database}`;
class MongoConnexion {

    constructor(){
        this.connexion();
    }

    connexion = () => {
        //connexion au serveur MONGODB
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(r => {
      console.log(`CONNEXION AU SERVER OK cause ${r}`)
  }).catch(e=>{
    console.log(`CONNEXION AU SERVER KO pour cause ${e}`)
  });
    }
}

module.exports = new MongoConnexion();
