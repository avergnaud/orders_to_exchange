const express = require('express')
const app = express()
const krakenPrivateUserData = require('./my-kraken-api/krakenPrivateUserData');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/order', function(req, res) {

    console.log(req.body)

    /*
    krakenPrivateUserData.postRequest('AddOrder', {
        'pair': req.body.pair,
        'type': req.body.type,
        'ordertype': req.body.ordertype,
        'volume': req.body.volume
    })
    .then(function(orderResult) {
        console.log(JSON.stringify(orderResult));
    })
    .catch(rejected => console.log('promise rejected: ' + rejected));    
    */

    res.send(req.body);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))