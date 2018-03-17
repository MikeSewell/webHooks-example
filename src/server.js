const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' })
});

app.post('/hook', (req,res)=>{
// console.log('body ==== : ', req.body)
    res.status(200).send("hello world")
});


var port = process.env.PORT || '3000';
app.listen(3000,()=>{
    console.log("Running on port : ",port);

});

