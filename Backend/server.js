const express=require("express")
const cors=require("cors")
const connection = require("./configuration/mongo")
const router = require("./router/testrouter")

const dotenv= require('dotenv')
const Contact = require("./controller/contactSchema")




const app = express()
connection()



app.use(express.json());
app.use(cors())
app.use('/',router)


dotenv.config()

const PORT=5000

app.listen(PORT,console.log(`server is running on ${PORT}`))