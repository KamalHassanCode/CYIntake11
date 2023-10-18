const express = require('express')  //import
const app = express() 


// Middleware to serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set up views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // You can use a different template engine if you prefer

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about-us', (req, res) => {
  res.render('about');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/users', (req, res) => {
  // Replace this with your user data in JSON format
  const users = [
    { name: 'User 1', address: 'Address 1' },
    { name: 'User 2', address: 'Address 2' },
    // Add more users as needed
  ];

  res.json(users);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
