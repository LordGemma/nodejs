const Users = require('../models/users');

exports.getAddUser = (req, res, next) => {
    res.render('admin/add-user', {
        pageTitle: 'Add User',
        path: '/admin/add-user',
        formsCSS: true,
        userCSS: true,
        activeAddUser: true
    });
};

exports.postAddUser = (req, res, next) => {
    const firstName = req.body.firstName;
    const avatar = req.body.avatar;
    const lastName = req.body.lastName;
    const company = req.body.company;
    const jobTitle = req.body.jobTitle;
    const email = req.body.email;
    const phone = req.body.phone;

    const user = new Users(firstName, lastName, avatar, company, jobTitle, email, phone);
    user.save();
    res.redirect('/users');
};

exports.getUsers = (req, res, next) => {
    Users.fetchAll(users => {
        res.render('admin/user-list', {
            users: users,
            pageTitle: 'Admin Users',
            path: '/admin/users'
        });
    });
};