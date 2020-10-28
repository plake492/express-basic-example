// ==============================================================================

const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 8080

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// ============================================================================== //
// routes
// ============================================================================== //
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.get('/api/test', (req, res) => {
  res.json('hello')
})

app.post('/api/test', (req, res) => {
  console.log('req.body==>>', req.body)
  res.json({ msg: 'the user made it to the server ', data: req.body })
})

app.put('/api/test/:id', (req, res) => {
  console.log('req.prams==>>', req.params)
  console.log('req.body==>>', req.body)
  res.json()
})

app.delete('/api/test', (req, res) => {
  console.log('req.body==>>', req.body.username)
  res.json({ msg: 'the user made it to the server ', data: req.body })
})

// ============================================================================== //

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT)
})
