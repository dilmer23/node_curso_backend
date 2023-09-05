const express = require('express');
const productosRouters = require('./productos.router');
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');

function routerApi(app) {
    //ruta maestra de todas la apis path global
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/productos', productosRouters);
    router.use('/users', usersRouter);
    router.use('/customers', customersRouter);

}

module.exports = routerApi;