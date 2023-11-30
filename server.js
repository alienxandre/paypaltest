const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/paypal-webhook', (req, res) => {

    console.log('PayPal Webhook Event:', req.body);
    res.sendStatus(200);
});

app.get('/thank-you', (req, res) => {
    const transactionId = req.query.transactionId;
    res.send(`<h1>Thank You!</h1><p>Transaction ID: ${transactionId}</p>`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
