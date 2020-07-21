require('dotenv').config();

const express = require('express')
const aylien = require("aylien_textapi");

// Aylien API
const aylienAPI = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(8080, function () {
    console.log('Application is listening on port 8080!')
})

app.get('/processText', async function (req, res) {
    // console.log(`APP_ID: ${process.env.APP_ID}`);
    // console.log(`APP_KEY: ${process.env.APP_KEY}`);

    sentimentURL(req.query.url)
    .then(data => {
        return res.send(data);
    })
    .catch(error => {
        console.log('Catched error: ', error);
        return res.send(error);
    })
})

async function sentimentURL(url) {
    return new Promise((resolve, reject) => {
        aylienAPI.sentiment({ url }, (error, response) => {
            if(!error) {
                resolve(response)
            } else {
                reject(error)
            }
        });
    })
}
