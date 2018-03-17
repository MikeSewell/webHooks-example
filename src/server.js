const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get('/', (req,res)=>{
res.send('Hello World')
});
app.post('/hook', (req,res)=>{
console.log('body ==== : ', req.body)
res.send('Hello World')
});


var port = process.env.PORT || '3000';
app.listen(3000,()=>{
    console.log("Running on port : ",port);

});

