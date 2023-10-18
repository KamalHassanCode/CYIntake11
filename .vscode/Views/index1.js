const usersData = [
    { name: 'User 1', address: 'Address 1' },
    { name: 'User 2', address: 'Address 2' },
   
  ];
  
  app.get('/users', (req, res) => {
    
    res.render('users', { users: usersData });
  });