const fs = require('fs')
const apiCall = require('./temperature')
const { firstChar } = require('./names')
const covid = require('./covid')
const quotes = require('./quotes')
const http = require('http')
const town = require('./town')

let countryCapital = town().capital
let countryName = town().name

console.log(countryName)
console.log(countryCapital)


let server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
        
        <style>

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }

        body{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
           
            height:200vh;
         
        }


        section{
            background: url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
            background-size:cover;
            font-size:25px;
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            width:100%; 
            height:100%;
            
        }

        .cardNYC{


            width:400px;
            height:400px;
            background-color: rgba(0, 181, 204, .3);
            padding:50px;
            backdrop-filter: blur(6px);
        }


        .secondStory{
            background: url('https://images.unsplash.com/photo-1601526504956-83f02f6b212c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
            background-size:cover;
            font-size:25px;
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            width:100%; 
            height:100%;
   
            background-color: rgba(0, 181, 204, .3);
            padding:50px;
            backdrop-filter: blur(6px);
        }


        span{

            color:red;
        }



        
        </style>

        <section>
            <div class='cardNYC'>
                <h1>Hello World</h1>

                <p>Hello, my name is <span> ${firstChar}</span> </p>
                <p>I'm currently in <span> ${cityName} </span> and the temperature is <span> ${theTemp} </span> </p>
                <p>I'm flying from <span> ${covidCountry} </span> and the COVID cases there are pretty high, like <span> ${covidCases} </span> confirmed cases and <span> ${covidDeathes} </span> deathes. </p>
                <address>"${quote}"</address>
            </div>
        </section>


        <div class='secondStory'>
            <div class='cardNYC'>
            <h1>Another Story</h1>

            <p>I live in <span> ${countryName}</span> </p>
            </div>
        

        </div>
        `)
    }
})

server.listen(5000)



const quote = quotes().quote

console.log(quote)



covidCountry = covid().covidCountry
covidCases = covid().covidCases
covidDeathes = covid().covidDeathes





cityName = apiCall().name
theTemp = apiCall().temp


fs.writeFileSync('./letters/letterFromJohn', `Hello, my name is ${firstChar} `)

fs.appendFileSync('./letters/letterFromJohn', `I'm currently in ${cityName} and the temperature is ${theTemp} `);
fs.appendFileSync('./letters/letterFromJohn', `I'm flying from ${covidCountry} and the COVID cases there are pretty high, like ${covidCases} confirmed cases and ${covidDeathes} deathes. `)
console.log(fs.readFileSync('./letters/letterFromJohn', "utf8"))

















/* 2. Axios example: */
/*
const axios = require('axios');

axios.get('https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=dcedc9f6a3375687009f75babf7cb35b')
    .then(response => {
        writeLetter(response.data.name)
    })
    .catch(error => {
        console.log(error);
    });
*/

/* 3. Request example: */
/*
const request = require('request');

request('https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=dcedc9f6a3375687009f75babf7cb35b', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log("body: ")
    // console.log(body)
    writeLetter(body.name)
});
*/
