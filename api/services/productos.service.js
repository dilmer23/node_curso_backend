const { faker } = require("@faker-js/faker");
//npm i @hapi/boom
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelizeOrm');
class prodcutosServices {
    constructor() {
        this.productos = [];
        this.nuevoProducto = [];
        this.generate();
    }
    async generate() {
        // const limit = 100;
        for (let index = 0; index < 100; index++) {
            this.productos.push({
                id: faker.string.uuid(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                imagen: faker.image.url(),
            });
        }
    }
    async create(data) {
        console.log(data);
        const newProducto = await models.productos.create(data);
        return newProducto;
    }
    async findOne(id) {
        //findByPkbudscar por primary key
        const rta = await models.productos.findByPk(id);
        return rta;
        
    }
    async update(id, change) {
        const index = this.productos.findIndex(item => item.id === id);
        console.log(id);
        if (index === -1) {
            throw boom.notFound('error product Not');
        }
        const productos = this.productos[index];
        this.productos[index] = {
            ...productos,
            ...change
        };
        return this.productos[index];
    }
    async delete(id) {
        const index = this.productos.findIndex(item => item.id === id);
        if (index === -1) {
            throw boom.notFound('error product Not')
        }
        this.productos.splice(index, 1);
        return { id };
    }
    async find() {
        const rta = await models.productos.findAll();
        return rta;
    }
}
module.exports = prodcutosServices;