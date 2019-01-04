const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const mainRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', mainRoutes);
app.use(userRoutes);

app.use(errorController.get404);

app.listen(5000);