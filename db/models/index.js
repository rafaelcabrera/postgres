/* Este archivo se encarga de enviar la conexion a los modelos y con esto podemos hacer el mapeo y serializacion
de datos */
const {User, UserSchema}=require('./user.model')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;