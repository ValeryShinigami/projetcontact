const mongoose = require('mongoose');
const server = 'localhost:21017';
const database = 'ContactDb';

class MongoConnexion {

    constructor(){
        this.connexion();
    }

    connexion = () => {
        //connexion au serveur MONGODB
mongoose.connect('mongodb://localhost/ContactDb', {
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