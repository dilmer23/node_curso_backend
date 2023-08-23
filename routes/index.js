const express = require('express');
const productosRouters = require('./productos.router');
const userRouters = require('./user.router');

function routerApi(app) {
    //ruta maestra de todas la apis path global
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/productos', productosRouters);
    // router.use('/users', userRouters);

}

module.exports = routerApi;