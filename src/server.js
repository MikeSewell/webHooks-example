const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get('/', (req,res)=>{

    res.status(200).send('Hello world')
});

app.post('/webhook', (req,res)=>{
    res.status(200).send("hello world")
    const { body } = req
    const senderName = body.sender.login
    const repoUsed = body.repository.name
    const linktoRepo = body.repository.html_url

    
    const logString = `${senderName} is working with pull-request in theg ${repoUsed} repository. \nLink to that working repository : ${linktoRepo}`
    console.log(logString);
});


var port = process.env.PORT || '3000';
app.listen(port,()=>{
    console.log("Running on port : ",port);

});

