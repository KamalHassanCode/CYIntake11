const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser'); 

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/signup', (req, res) => {
  res.render('signup'); // Renders the 'signup.ejs' template
});


app.post('/signup', (req, res) => {
  const email = req.body.email;
  // Process the email (store it, send confirmation, etc.)

  
  res.send(`Thank you for signing up with email: ${email}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



