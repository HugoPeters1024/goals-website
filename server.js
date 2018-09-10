const express = require('express')
const app = express()
const routes = require('./routes.js')
const api_router = require('./api.js')

app.set('view engine', 'ejs');
app.use(express.static('public'));

routes(app)

app.use('/api', api_router);

app.listen(8000, () => console.log("Server listening to port 8000."))
