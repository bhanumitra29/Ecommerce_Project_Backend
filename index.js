const express = require('express');
const cors = require('cors');
const { categoryRouter } = require('./categeoryRouting');

const port  = 2926;
const app = express()
app.use(cors());
const bodyParser = require('body-parser');
const { createOrder, capturePayment } = require('./paypal-api');
app.use(bodyParser.json());
app.get('/', (request,response)=>{
    response.send('this is running')
})



app.use('/api',categoryRouter)


app.post("/payment/create-paypal-order", async (req, res) => {
    try {
        const request = req.body;
        console.log(req.body);
        const order = await createOrder(request);
        res.json(order);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post("/payment/capture-paypal-order", async (req, res) => {
    const { orderID } = req.body;
    try {
        const captureData = await capturePayment(orderID);
        res.json(captureData);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.listen(port,()=>{
    try{
        console.log('port is running in 2926')
    }
    catch(err){
        console.log(`error :- ${err}`)
    }
})
