const Users = require('../models/users');

exports.getUsers = (req, res, next) => {
  Users.fetchAll(users => {
    res.render('users/index', {
      users: users,
      pageTitle: 'All Users',
      path: '/users'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Users.fetchAll(users => {
    res.render('users/main', {
      users: users,
      pageTitle: 'Main Page',
      path: '/'
    });
  });
};
