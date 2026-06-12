const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Tottenham Hotspur are the best club in the world! COYS!' });
});

app.listen(port);