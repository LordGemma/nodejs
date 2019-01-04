const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'users.json'
);

const getUsersFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Users {
  constructor(firstName, lastName, avatar, company, jobTitle, email, phone) {
    this.firstName = firstName;
    this.avatar = avatar;
    this.lastName = lastName;
    this.company = company;
    this.jobTitle = jobTitle;
    this.email = email;
    this.phone = phone;
  }

  save() {
    getUsersFromFile(users => {
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getUsersFromFile(cb);
  }
};
