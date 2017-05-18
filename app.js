let express = require('express')
let app = express()
let helmet = require('helmet')
let colors = require('./colors.json')

app.use(helmet())

app.use('/public', express.static(__dirname + '/public'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', {'colors': colors})
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})

