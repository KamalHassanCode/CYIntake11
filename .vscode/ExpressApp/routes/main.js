const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 4000
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use('/', userRoutes);
app.use('/admin', adminRoutes); 

app.listen(PORT , () => { 
  console.log(`Server is running on port ${PORT}`);
});
