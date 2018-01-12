const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const pagesRoutes = require('./pages/routes');
const graphqlRoutes = require('./graphql/routes');

const app = express();

app.use(bodyParser.json());

app.use('/', pagesRoutes)
app.use('/graphql', graphqlRoutes);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/hello', (req, res) => {
    res.send({ express: "hello from express" })
})

app.listen(5000, () => console.log('Express app listening on localhost:5000'));