
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const regionRouter = require('./routes/region.routes')
const port = 5001


app.listen(port,async ()=>{
    console.log(`i am listening on ${port}`)
})


// app.get('/', (req, res) => {
    
//     res.status(200).send({
//         status: false,
//         message: "Welcome",
//         data: []
//     })

// })

app.use('/api/v1', regionRouter)



app.use('*', (req, res, next)=>{
    res.status(404).send({
        status:'error',
        message: 'Seems you got lost. so sorry'
    })
})




module.exports = app