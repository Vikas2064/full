// week 1

// how to create the server 

const fs=require("fs");
const express = require("express");
const app = express();
const port= 3000;  
app.get('/',(req,res)=>{
    res.send("this is home page");
})

// function callbackFn(err,data)
// {
//     console.log(data)
// }
// fs.readFile('a.txt',"utf-8",callbackFn)
function calculateSum(counter)
{
    let sum=0;
    for(var i=1;i<counter;i+=1)
    {
        sum+=i;
    }
    return sum;
}


function handleFirstRequest(req, res)
{
    var counter= req.query.counter;
    var sum= calculateSum(counter);
    console.log(sum);
    sum = `the sum of number is ${sum}`
    res.send(sum);
}
function createUser(req,res)
{
    console.log("hello world")
    res.send("hello world")
}
app.post('/createUser',createUser)
app.get("/handleSum",handleFirstRequest)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})



// week 2





