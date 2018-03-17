const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get('/', (req,res)=>{

    res.status(200).send('Hello world')
});

app.post('/webhook', (req,res)=>{
    res.status(200).send("hello world")
    console.log(req.body);
});


var port = process.env.PORT || '3000';
app.listen(port,()=>{
    console.log("Running on port : ",port);

});

