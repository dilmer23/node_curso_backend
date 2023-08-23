const express = require('express');
const res = require('express/lib/response');
const routeApi = require('./routes');
//npm i --save-dev faker@5.5.3
const app = express()
const port = 3000
//middleware nativo de express
app.use(express.json());
//data faker de esa liberia


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/nuevo', (req, res) => {
    res.send('Hello World!')
});


//llamra funcion y pasar app exprres
routeApi(app);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});