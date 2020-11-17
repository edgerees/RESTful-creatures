// const dinoRouter = require('./controllers/dinoController')

// const layouts = require('express-ejs-layouts')

// const app = require('express')()

// app.set('view engine', 'ejs')

// app.get('/', (req,res) => {
//     res.send('hello I am alive!')
// })

// app.use(layouts)

// app.use('/dinosaurs', dinoRouter)

// app.listen(8000, () => {
//     console.log('sever started!')
// })

// require stuff
const express = require('express')
const app = express()
const layouts = require('express-ejs-layouts')

const cryptRouter = require('./controllers/cryptController')

// additional setup
app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({extended: false}))

// our routes
app.get('/', (req, res) => {
  res.send('hello I am alive!')
})

app.use('/cryptids', cryptRouter)


// listen!
app.listen(8000, () => {
  console.log('server started!')
})
