const express= require('express');
const mongoose= require('mongoose');
const app=express();

const url='mongodb://localhost:27017/users'
mongoose.connect(url, {useNewUrlParser:true})

const con =mongoose.connection;

con.on('open',() => {
    console.log('Connected...')
});
app.use(express.json())

const alienRouter = require('./routes/aliens');
app.use('/aliens',alienRouter);

app.listen(9000,()=>{
    console.log('listening on port 9000...');
}) 
