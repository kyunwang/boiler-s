import express from 'express';

import path from 'path';
import bodyParser from 'body-parser';
import nunjucks from 'nunjucks';

const app = express();

import routes from './routes';

require('dotenv').config({ path: './vars.env' });

// Setting the view engine
app.set('view engine', 'html');
nunjucks.configure('./server/views', {
	autoescape: true,
	express: app,
	watch: true
});

// Set static route
app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/', express.static(path.join(__dirname, '../public'), { maxAge: '31d' })); // This will cache the folder for 31days

// Use bodyparser
app.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }));


// Add global middleware available in templates and all routes
app.use((req, res, next) => {
	res.locals.h = 'Add helpers file here';
	next();
});

app.use('/', routes);

app.listen(process.env.PORT, function() {
	console.log('Listening to port: ', process.env.PORT);
});