const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get('/', (req,res)=>{

    res.status(200).send("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Document</title></head><body></body></html>")
});

app.post('/hook', (req,res)=>{
// console.log('body ==== : ', req.body)
    res.status(200).send("hello world")
});


var port = process.env.PORT || '3000';
app.listen(3000,()=>{
    console.log("Running on port : ",port);

});

