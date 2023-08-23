const express = require('express');
const prodcutosServices = require('./../services/productos.service');

const router = express.Router();
// instacio la clase
const service = new prodcutosServices();

router.get('/', (req, res,) => {
    const productos = service.find();

    res.json(productos);

});

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const producto = service.findOne(id);
        res.json(producto);
    } catch (error) {
        res.status(404).json({
            messague : "error"
        })    }


});


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
    res.status(201).json(rta);
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