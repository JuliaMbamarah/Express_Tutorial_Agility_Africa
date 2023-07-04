require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;

app.set('view engine', 'ejs');

app.get('/google', (req, res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
}
)
