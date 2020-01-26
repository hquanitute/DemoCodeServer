const express  = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let router = express.Router();

const port = process.env.PORT || 5000;
let app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

let mainRouter = require('./controller//main');

app.use('/api',mainRouter);

app.listen(port);