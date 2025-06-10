import app from './app.js'
import "./database/connection.js"
import { getConnection } from './database/connection.js';
import https from 'https';
import fs from 'fs';

getConnection()


https.createServer({
    key: fs.readFileSync('./src/keys/private.key'),
    cert: fs.readFileSync('./src/keys/cert_new.crt'),
	ca: fs.readFileSync('./src/keys/new_pem.pem'),
    passphrase: 'mortonpagos'
}, app)
.listen(8444,function () {
    console.log( "Servidor Express escuchando por el puerto ");
});

console.log("Ya esta corriendo");