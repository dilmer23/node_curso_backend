const { Model, DatatYPE, Sequelize, DataTypes } = require('sequelize');
const PRODUCTO_TABLE = 'productosp';


//define la estructurta de la base de datos
const ProdutosSchema = {
    id: {
        allowNull: true,
        autoIncrement: false,
        type: DataTypes.STRING,
        primaryKey: true
    },
    username: {
        allowNull: true,
        autoIncrement: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: true,
        autoIncrement: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: true,
        autoIncrement: false,
        type: DataTypes.STRING
    },
    imagen: {
        allowNull: true,
        autoIncrement: false,
        type: DataTypes.STRING
    },
    // createdAt: {
    //     allowNull: false,
    //     type: DataTypes.STRING,
    //     field: 'create_at',
    //     defaultValue: Sequelize.NOW
    // }
};

class Producto extends Model {
    //metodos estaticos sin declaracion para acceder al metodo
    static associations() {
        //associations
    };

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTO_TABLE,
            modelName: 'productos',
            timestamps: false,
        }
    }
};

module.exports = { PRODUCTO_TABLE, ProdutosSchema, Producto};