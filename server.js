import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import router from './routes/index.js';

var app = express();
app.server = http.createServer(app);

app.use(
  bodyParser.json({
    limit: '100kb',
  }),
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.server.listen(3000);
console.log('Started on port ' + app.server.address().port);
export default app;
