
const boom = require('@hapi/boom');

// middleware dinamico
function validatorHandler(schema, property) {
    // la closure  es propio de java script
    return (req, res, next) => {
        console.log(property);
        const data = req[property];
        const { error } = schema.validate(data);
        if (error) {
            next(boom.badRequest(error));
        }
        next();
    }

}

module.exports = validatorHandler;