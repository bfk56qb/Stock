const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');


const PORT = process.env.PORT || 5000;

// Set Handlebar middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const otherstuff = "Hello there!  This is other stuff!!"

//Set handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
        stuff: otherstuff

    });
});

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));