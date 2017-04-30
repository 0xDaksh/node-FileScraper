var express = require('express'),
    app = express(),
    request = require('request')


app.get('/', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress ||req.connection.socket.remoteAddress;
    res.send(`<h3>Welcome to Scraper ${ip}</h3>`)
});

app.listen(process.env.PORT || 3000)
