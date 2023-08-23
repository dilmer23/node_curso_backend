const { faker } = require("@faker-js/faker");
class prodcutosServices {

    constructor() {
        this.productos = [];
        this.nuevoProducto = [];
        this.generate();
    }
    async generate() {
        const limit = 100;
        for (let index = 0; index < 100; index++) {
            this.productos.push({
                id: faker.internet.ip(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                password: faker.internet.password(),
                birthdate: faker.date.birthdate(),
                registeredAt: faker.date.past(),
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
        return this.productos.find(item => item.id === id);

    }
    async update(id, change) {
        const index = this.productos.findIndex(item => item.id === id);
        console.log(id);
        if (index === -1) {
            // throw new Error('producto no existe');
            return { messgue: 'error' }
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
            // throw new Error('producto no existe');
            return { messgue: 'error' }
        }
        this.productos.splice(index, 1);
        return { id };

    }

    find() {
        return this.productos;
    }
}
module.exports = prodcutosServices;