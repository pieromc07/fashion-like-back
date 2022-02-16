const express = require('express');
const cors = require('cors');
const database = require('./setting/connection');


const app = express();

const router = require('./routes/router');


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(port, () => {
    console.log('Listening on port 3000');
}
);