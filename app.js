const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.use(express.static('public'));

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use(require('./routes/index.js'));

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});
