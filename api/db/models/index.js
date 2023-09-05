const { ProdutosSchema, Producto } = require('./productos.model');
const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
    Producto.init(ProdutosSchema, Producto.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));

    /// despues de la inicialización ejecutrar relaciones de Los modelos 
    Customer.associate(sequelize.models);
}

module.exports = setupModels;