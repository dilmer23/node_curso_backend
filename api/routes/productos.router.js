const express = require('express');
const prodcutosServices = require('./../services/productos.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductoSchema, updateProductoSchema, getProductoSchema } = require('./../schemas/productos.schema');

const router = express.Router();
// instacio la clase
const service = new prodcutosServices();

router.get('/', async (req, res,) => {
    validatorHandler();
    try {
        const productos =  await service.find();
        res.json(productos);
    } catch (error) {
        //middleware de errores netx
        next(error);
    }


});

router.get('/:id',
    validatorHandler(getProductoSchema, 'params'),
    //validator que quiere hacer y que typo
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const producto = await service.findOne(id);
            res.json({producto});
        } catch (error) {
            next(error);
        }
    }
);


//dos parametros end point
router.get('/:id2/:idProducto', (req, res) => {

    try {
        const { id2 } = req.params;
        const { idProducto } = req.params;
        res.status(200).json({
            id2,
            idProducto,
            name: 'product',
            precio: '10000',
        }
        );
    } catch (error) {
        res.status(404).json({
            messague: "No encontrado"
        })

    }

});

//post 
router.post('/', async (req, res) => {
    const body = req.body;
    const rta = await service.create(body);
    console.log(body);
    res.status(200).json(rta);
});
//delete 
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
});

//update
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const rta = await service.update(id, body);
    res.json(rta);
})

module.exports = router;