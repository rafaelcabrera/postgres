const boom = require('@hapi/boom');


// const getConnection = require('../libs/postgres')
// const pool = require('../libs/postgres.pool');
const {models} = require('.././libs/sequelize')


class UserService {
  constructor() {

  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {

    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
