// const builder = require('botbuilder');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require('path');
const http = require('http');

// const connector = new builder.ChatConnector({
//   appId: '',
//   appPassword: ''
// });

// const bot = new builder.UniversalBot(connector);

app.use(express.static(path.join(__dirname, 'public')));

// bot.dialog('/', function (session) {
//   console.log('called');
//   console.log(session);
//   session.send("Hello World");
// });

// app.post('/bot-message', connector.listen());
// app.post('/api/messages', connector.listen());
// app.get('/api/conversations', connector.listen());


http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
