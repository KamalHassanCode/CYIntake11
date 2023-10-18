const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware

// Route to render the user data form
app.get('/user-form', (req, res) => {
  res.render('user-form'); // Renders the 'user-form.ejs' template
});

// Route to handle the form submission
app.post('/user', (req, res) => {
  const userData = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
  };

  // Display the user data
  res.send(`
    <h1>User Data</h1>
    <p>ID: ${userData.id}</p>
    <p>Name: ${userData.name}</p>
    <p>Age: ${userData.age}</p>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
