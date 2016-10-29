const builder = require('botbuilder');
const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;
const path = require('path');
const https = require('https');

try {

  var creds = {
    key : fs.readFileSync('./server.key', 'utf8'),
    cert : fs.readFileSync('./server.crt', 'utf8')
  };
} catch (e) {
  var creds = {};
  console.log('Not an error if running locally');
}

const connector = new builder.ChatConnector({
  appId: '',
  appPassword: ''
});

const bot = new builder.UniversalBot(connector);

app.use(express.static(path.join(__dirname, 'public')));


bot.dialog('/', function (session) {
  console.log('called');
  console.log(session);
  session.send("Hello World");
});

app.post('/bot-message', connector.listen());
app.post('/api/messages', connector.listen());
app.get('/api/conversations', connector.listen());

app.listen(port, () => console.log(`Started on ${port}`));
https.createServer(creds, app)
  .listen(443, () => console.log('Started https server'));
