require('dotenv').config({ path: './vars.env' });

import app from './app';

app.listen(process.env.PORT, function() {
	console.log('Listening to port: ', process.env.PORT);
});