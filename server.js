const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 3001;

app.use(express.json());
app.use('/api', require('./routes/weather'));

app.listen(port, () => {
    console.log(`Server connected on port ${port}`);
})