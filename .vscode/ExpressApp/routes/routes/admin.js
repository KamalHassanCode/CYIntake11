const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
  res.render('admin-login', { title: 'Admin Login' });
});


router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

 

  if (condition) {
   
    res.redirect('/admin/dashboard');
  } else {
   
    res.render('admin-login', { title: 'Admin Login', errorMessage: 'Authentication failed' });
  }
});


router.get('/dashboard', (req, res) => {
 
  res.render('admin-dashboard', { title: 'Admin Dashboard' });
});

module.exports = router;
