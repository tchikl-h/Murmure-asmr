import express = require('express');
import * as path from 'path';
import * as utilities from "./request";
import * as request from 'request';

const port = 5000;
const app = express();
let access_token = '';  
let refresh_token = '';

app.use(express.static(__dirname));

app.get('/getCaption', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.get('/', (req, res) => {
    res.redirect('/login');
});

// send the user to index html page inspite of the url
app.get('/login', (req, res) => {
    utilities.Request("https://accounts.google.com/o/oauth2/auth?client_id=293017859768-lkovn7u12j40g8nt0u8ckj17gh0k0d8l.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Foauth2callback&scope=https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner&response_type=code&access_type=offline", "POST", [])
    .then(response => {
        res.set('Content-Type', 'text/html');
        res.send(new Buffer(response));
    })
});

app.get('/oauth2callback', (req, res) => {
    var url = 'https://accounts.google.com/o/oauth2/token';
    var payload = {
        grant_type: 'authorization_code',
        code: req.query.code,
        client_id: '293017859768-lkovn7u12j40g8nt0u8ckj17gh0k0d8l.apps.googleusercontent.com',
        client_secret: 'kcBSP6Je2JKxFi8sOov0ki9_',
        redirect_uri: 'http://localhost:5000/oauth2callback'
    };

    request.post(url, { form: payload }, (error, response, body) => {
        if (JSON.parse(body)['access_token']) {
            access_token = JSON.parse(body)['access_token'];
            refresh_token = JSON.parse(body)['refresh_token'];
            console.log(access_token);
            res.redirect('/getCaption');
            // window.localStorage.setItem("access_token", JSON.parse(body)['access_token']);
            // window.localStorage.setItem("refresh_token", JSON.parse(body)['refresh_token']);
            // res.send('Token successfully stored');
        }
        else
            res.send('The token could not be stored');
    });
});

app.get('/token', (req, res) => {
    res.send("GREAT !");
});

app.listen(port);