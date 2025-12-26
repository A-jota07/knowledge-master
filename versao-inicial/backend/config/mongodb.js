require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB conectado com sucesso')
    })
    .catch(e => {
        const msg = 'ERROR! Não foi possivel se conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })