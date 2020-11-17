const fs = require('fs')

const cryptRouter = require('express').Router()

cryptRouter.get('/', (req, res) => {
  const rawCrypts = fs.readFileSync('./cryptids.json')
  const crypts = JSON.parse(rawCrypts)
  
  res.render('cryptids/index', { crypts })
})

// new has to be above show, or else it will think that 'new' is an id value
cryptRouter.get('/new', (req, res) => {
  res.render('cryptids/new')
})

cryptRouter.get('/:id', (req, res) => {
  const rawCrypts = fs.readFileSync('./cryptids.json')
  const crypts = JSON.parse(rawCrypts)
  const id = parseInt(req.params.id) - 1
  const crypt = crypts[id]

  res.render('cryptids/show', { crypt })
})

cryptRouter.post('/', (req, res) => {
  const newCrypt = req.body
  const rawCrypts = fs.readFileSync('./cryptids.json')
  const dinos = JSON.parse(rawDinos)
  dinos.push(newCrypt)

  fs.writeFileSync('./dinosaurs.json', JSON.stringify(crypts))

  res.redirect('/cryptids')
})

module.exports = cryptRouter