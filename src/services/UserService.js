const knex = require('../../knex');
const bcrypt = require('bcryptjs');

class UsersService {

  getNames() {
    return knex('users')
      .select('first_name');
  }

  getSecretFor(id) {
    return knex('users')
      .select('secret')
      .first()
      .where({id});
  }

  getUser(email) {
    return knex('users')
      .first()
      .where({email});
  }

  tryLoginUser(email, password) {
    return knex('users')
      .select('password')
      .first()
      .where({email})
      .then(queryResult => {
        if (!queryResult) return false;
        else if (!bcrypt.compareSync(password, queryResult.password)) {
          return false;
        }
        return true;
      });
  }
}

module.exports = UsersService;
