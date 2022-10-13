const express = require ('express')
const app = express()
const PORT = process.env.PORT || 4000
var format = require( 'date-format')
//* swager ui related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res)=>{
res.status(200).send("<h1>hello from lco</h1>")
})

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial ={
        username :"anissa",
        folowers : 66, 
        folows :21,
        date : format.asString("dd[MM] , hh:mm:ss", new Date())
    }

    res.status(200).json({instaSocial})
})

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial ={
        username :"anissafacebook",
        folowers : 166, 
        folows :211,
        date : format.asString("dd[MM] , hh:mm:ss", new Date())
    }

    res.status(200).json(instaSocial)
})
app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial ={
        username :"anissamandh",
        folowers : 46, 
        folows :221,
         date : format.asString("dd[MM] , hh:mm:ss", new Date())
    }

    res.status(200).json({instaSocial})
})

app.get("/api/v1/:token", (req, res)=> {
    console.log(req.params.token)
res.status(200).json({param: req.params.token})
})
app.listen(PORT, () =>{
console.log(`server is running at ${PORT}`)
});