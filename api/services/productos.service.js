const { faker } = require("@faker-js/faker");
//npm i @hapi/boom
const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');
const { connect } = require("../routes/productos.router");
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
        const nuevoProducto = {
            id: faker.internet.domainName(),
            ...data,
        }
        this.productos.push(nuevoProducto);
        return nuevoProducto;
    }
    async findOne(id) {
        const client = await getConnection();
        const rta = await client.query('SELECT * FROM public.productosp');
        return rta.rows;
        // return this.productos.find((item => item.id === id));
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
        const client = await getConnection();
        const rta = await client.query('SELECT * FROM public.productosp ORDER BY id ASC');
        return rta.rows;
    }
}
module.exports = prodcutosServices;