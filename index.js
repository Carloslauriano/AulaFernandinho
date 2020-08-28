const express = require('express')
const path = require('path')

//Inicializando o express
const app = express()

//view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'src','app','views'))

//configurando a pasta estática
app.use(express.static(path.join(__dirname,'src','public')))

app.get("/", (req, res)=>{
  res.render('formulario_imagens')
})

app.listen(3000)