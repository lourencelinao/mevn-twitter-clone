const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// middleware
app.use(bodyParser.json())
app.use(cors())

const tweet = require('./routes/tweet')
app.use('/tweet', tweet)

// firebase
// let authorized = true;
// function checkAuth(req, res, next){
//     if(authorized){
//         next()
//     }else{
//         res.status(403).send('Unauthorized')
//         return
//     }
// }
// app.use('/', checkAuth)

// // routes
// app.use('/', (req, res) => {
//     res.status(200).json({
//         message: 'Main menu bitch'
//     })
// })

// production
if(process.env.NODE_ENV === 'production'){
    //static folder
    app.use(express.static(__dirname, + '/public/'))

    // SPA handler
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}

// port
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening in port ${port}`)
})