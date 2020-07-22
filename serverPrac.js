const express = require('express');
const Sentiment = require('sentiment');
var sentiment = new Sentiment();
var app=express()
app.use(express.static(__dirname+'/public'));



let addition=function(num1,num2)
{
    let result=num1+num2;
    return result;
}

let sentimentAnalyze=function(text){
let result = sentiment.analyze(text);
return result;
}
app.get('/analyze',function(req,res){
   let resultAnalysis= sentimentAnalyze('this is hard')
   res.send('the analysis is '+resultAnalysis)
})

app.get('/adder',function(req,res)

{
    let num1=parseInt(req.query.num1);
    let num2=parseInt(req.query.num2);
    let myresult = num1+num2;
    res.json({result:myresult})
})

app.get('/test',function(req,res){
    res.send('this is test endpoint !')
})

app.listen(3000);