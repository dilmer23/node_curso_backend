const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const routeApi = require('./routes');
const { logErrors, errorsHandler, boomErrosHandler } = require('./middlewares/error.middleware')
//npm i --save-dev faker@5.5.3
const app = express()
const port =  process.env.PORT || 3000;
//middleware nativo de express
app.use(express.json());
//data faker de esa liberia
app.use(cors());
//acepta cualquier origen ip
//npm i cors

//atender solictudes a origines 
const whislist = ['http://localhost:3000', 'http://localhost:8080', 'htpps://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if (origin.include(origin)) {
            callback(null, true);
        } else {
            callback(new Error(' No permitido'));
        }
    }
}


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/nuevo', (req, res) => {
    res.send('Hello World!')
});


//llamra funcion y pasar app exprres
routeApi(app);
//llamar middlerware despues de app
app.use(logErrors);
app.use(boomErrosHandler);
app.use(errorsHandler);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});