const { ProdutosSchema, Producto } = require('./productos.model');

function setupModels(sequelize) {
    Producto.init(ProdutosSchema, Producto.config(sequelize));
}

module.exports = setupModels;