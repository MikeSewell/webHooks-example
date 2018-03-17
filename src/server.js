const express = require("express");
const app = express();
app.use(bodyParser.json());

app.get('/', (req,res)=>{
console.log('body ==== : ', req.body)
res.send('Hello World')
});
app.post('/', (req,res)=>{
console.log('body ==== : ', req.body)
res.send('Hello World')
});


const port = process.env.PORT || 3000;
app.listen(3000,()=>{
    console.log("Running on port : ",port);

});