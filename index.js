
import express from "express";
import ejs from "ejs"
import pg from "pg";
import bodyParser from "body-parser";

const app=express()
const port =3000;

let quiz = [
    { country: "France", capital:"Paris" },
    { country: "United Kingdom", capital: "London" },
    { country: "United States of America", capital: "New York" },
  ];
let score=0
let rcountry

function startgame(){

rcountry=quiz[Math.round(Math.random(quiz.length-1))]
console.log(rcountry)
}
let data={}
// app.use(express.json())
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get('/',(req,res)=>{
    startgame()
    
    score=0
    data={
        score:score,
        quest:rcountry.country
    }
    

    
    res.render("index.ejs",data)
    
})
app.post("/submit",(req,res)=>{
    console.log(req.body.answer==rcountry.capital)
    console.log(req.body)
    console.log(rcountry.capital)
    if(req.body.answer==rcountry.capital){
        score++
        startgame()
        data={
            score:score,
            quest:rcountry.country
        }
        res.render("index.ejs",data)
    }
    else{
        
        // alert(`Incorrect answer the right answer is ${rcountry.capital} Your score was ${score} click okay to play again'`)
        res.redirect("/")   
    }

    
})



app.listen(port,()=>{
    console.log(`listenig to prt ${port}`)
})
