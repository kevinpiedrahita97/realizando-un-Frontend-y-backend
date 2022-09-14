const express= require('express')
const cors = require('cors')

const app = express()
const port = 5500

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());
//#cuando te haga un get http://localhost:5500/transaction
app.get('/transaction',(req,res)=> {
    res.send('Hola, estoy funcionando con get')
})
//#cuando te haga un post http://localhost:5500/transaction
app.post('/transaction', (req,res) => {
    res.send('me hciieron un post')
})

app.listen(port,()=>{
    console.log(`estoy ejecutandome en http://localhost:${port}`)
})




