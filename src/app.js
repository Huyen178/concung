const express = require('express');
const timeout = require('connect-timeout');
const route = require('./routes');
const path = require('path');
const { engine } = require('express-handlebars');

const db = require('./configs/db');

const app = express();
app.use(timeout('10s'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

db.connectDB();

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(5000, function () {
  console.log('Concung is running at http://localhost:5000');
});
