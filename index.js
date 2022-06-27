const express = require('express');
const app = express()
const port = 3100;

app.get('/', (req, res) => res.send('Welcome David to AWS+GIT!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))