const admin = require("firebase-admin");
const serviceAccount = require("./path/to/firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;

//Certifique-se de adicionar a chave de conta de serviço do Firebase dentro da pasta config e nomeá-la como firebase-key.json (não compartilhe esse arquivo).