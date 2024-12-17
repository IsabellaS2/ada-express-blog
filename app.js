const express = require('express')
const path = require('path')
const { sequelize } = require('./models/index')
const blogRouter = require('./routes/blog')

const app = express()
const port = 8000

app.set('views', path.join(__dirname, 'views'))
console.log(path.join(__dirname, 'views'))

app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', blogRouter)

sequelize.sync().then(() => { 
   ()=> 
})

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
}); 