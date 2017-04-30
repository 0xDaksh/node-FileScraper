var express = require('express'),
    app = express(),
    request = require('request'),
    fs = require('fs')


app.get('/', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress ||req.connection.socket.remoteAddress;
    res.send(`<h3>Welcome to Scraper ${ip}</h3>`)
})

app.get('/scrape', (req, res) => {
    if(req.query.url && req.query.name) {
      request(req.query.url).pipe(fs.createWriteStream(__dirname + '/static/' + req.query.name))
      res.send(`<h3>Work has been Completed</h3>`)
    } else {
      res.send('<h3>Please add the valid Query String</h3>')
    }
})

app.listen(process.env.PORT || 3000)
