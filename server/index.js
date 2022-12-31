const express = require('express');
const morgan = require('morgan');

const usersRoutes = require('./routes/users.routes')
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'))
app.use(express.json());
// Routes
app.use(usersRoutes);
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server connected on port ${app.get('port')}`)
})