const express = require('express');
const db = require('./database/connection');
const routing = require('./routing/category');


const app = express();
let Port = process.env.port || 9090;
app.use(express.json());
app.use('/api/v1',routing);



app.listen(Port,()=>{
    console.log('server is started at port'+""+Port);
})