const { faker } = require("@faker-js/faker");
//npm i @hapi/boom
const boom = require('@hapi/boom');
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
                imagen:faker.image.url(),
            });

        }

    }
    async create(data) {
        const nuevoProducto = {
            id: faker.internet.domainName(),
            ...data,
        }
        this.productos.push(nuevoProducto);
        return nuevoProducto;

    }
    async findOne(id) {
        return this.productos.find((item => item.id === id));

    }
    async update(id, change) {
        const index = this.productos.findIndex(item => item.id === id);
        console.log(id);
        if (index === -1) {
           throw boom.notFound('error product Not')
            // return { messgue: 'error' }
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
            // return { messgue: 'error' }
        }
        this.productos.splice(index, 1);
        return { id };

    }

     async find() {
        return   this.productos;
    }
}
module.exports = prodcutosServices;