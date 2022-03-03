const express = require('express');
const app = new express;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req,res) => res.send('node funcionando'));
//app.use(express.static(path.join(__dirname, 'public')));
app.listen(3333);
