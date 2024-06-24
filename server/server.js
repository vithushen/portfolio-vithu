const express=require('express')
const app = express()
port = 5000
dotenv = require('dotenv') 
mg = require('mailgun-js')
cors = require('cors') 

dotenv.config()

const mailgun = () => mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('/api/email', (req, res) => {
    const {to, subject, message} = req.body,
        emailInfo = {
            from:'"Vithu" <vithu.99@hotmail.com>',
            to: `${to}`,
            subject: `${subject}`,
            html: `${message}`
        }

        //Testing on postman 
        //console.log(emailInfo)
        //res.send('testing...')

        mailgun().messages().send(emailInfo, (error, body) => {
            if(error){
                console.log(error)
                res.status(500).send({
                    message:'Something went wrong in sending email!'
                })
            } else {
                res.send({message:'Email sent sucessfully!'})
                console.log("Email sent sucessfully!");
            }
        })
})

app.use('/', (req, res) =>{
    res.send('Mailgun API')
})



app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})  

