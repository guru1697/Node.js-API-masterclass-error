const express = require('express');
const dotenv = require('dotenv');
 
dotenv.config({path:'./config/config.env'});
const server = express();
const PORT=process.env.PORT||5000;
server.listen(PORT,
    console.log(`server starts in ${process.env.NODE_ENV} mode on port ${PORT}`) 
    );
