const express = require('express')
const app = express()
require('dotenv').config()
const productRouter = require('./routes/product.route')
const connectDB = require('./config/db')

const port = process.env.PORT

//defining a route for the /products url
app.use('/',productRouter)

//connecting mongoDB
connectDB()

//setting default url for home page
// app.get('/', (req, res) => {
//   res.send('Project Home Page!!!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
