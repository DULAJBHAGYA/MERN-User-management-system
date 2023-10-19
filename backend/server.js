const express = require('express');
const {mongoose} = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admins');


app.use(bodyParser.json());
app.use(cors());

app.use(userRoutes);
app.use(adminRoutes);


const port = 8000;
const DB_URL = 'mongodb+srv://Ddbu1998:Ddbu1998@cluster0.6ucmvug.mongodb.net/'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>console.log('DB connection error',err));

app.listen(port, () =>{
    console.log(`App is runnning on ${port}`);
})