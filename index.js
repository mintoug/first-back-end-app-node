const express = require ('express')
const app = express()
const PORT = 4000 || process.env.PORT
var format = require( 'date-format')


app.get("/", (req, res)=>{
res.status(200).send("<h1>hello from lco</h1>")
})

app.get("/api/v1/:token", (req, res)=> {
res.status(200).json({param: req.params.token})
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
app.listen(PORT, () =>{
console.log(`server is running at ${PORT}`)
});