const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
require("./db")

const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('common'))
app.use(express.static(__dirname + '/'));
const user = require("./routes/user")
const event = require("./routes/event")

app.use('/api', user)
app.use('/api', event)
app.listen(process.env.PORT, (err) => {
    if (err) {

        console.log(err)

    } else {

        console.log('Server is listening')
    }

})




//Route || endpoint
app.get('/', (req, res) => {

    res.status(200).send("Server is responding")

})