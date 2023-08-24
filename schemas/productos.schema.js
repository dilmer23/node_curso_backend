// validar data es lo mismo que Dto , EL OBJECTIVO ES validar data 
// schema para cada campo para reutilizar código
//npm install joi instalar 


const joi = require('joi');

const id = joi.string().uuid();
const username = joi.string().alphanum().min(3).max(50);
const password = joi.string().alphanum().min(1).max(50);


const createProductoSchema = joi.object({
    username: username.required(),
    password: password.required(),
});

const updateProductoSchema = joi.object({
    username: username,
    password: password,
});

const getProductoSchema = joi.object({
    id: id.required()
});

module.exports = { createProductoSchema, updateProductoSchema, getProductoSchema }