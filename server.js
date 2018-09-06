const express = require('express')
const app = express()
const routes = require('./routes.js')

app.set('view engine', 'ejs');
app.use(express.static('public'));

routes(app)

app.listen(8000, () => console.log("Server listening to port 8000."))