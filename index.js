const express = require('express');
const cors = require('cors');
const { categoryRouter } = require('./categeoryRouting');

const port  = 2926;
const app = express()
app.use(cors());
const bodyParser = require('body-parser');

const { connection } = require('./config/db');
const { userRouter } = require('./userRouter');


app.use(bodyParser.json());
app.get('/', (request,response)=>{
    response.send('this is running')
})



app.use('/api',categoryRouter)
app.use("/user", userRouter);





app.listen(port, async()=>{

    try{
       await connection();
        console.log('port is running in 2926')
    }
    catch(err){
        console.log(`error :- ${err}`)
    }
})
