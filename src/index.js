const {PORT} = require('./config/serverConfig');
const express = require('express');
const bodyParser = require('body-parser');

setupAndstartServer= async()=>{


    const app = express();
    const port = PORT || 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 
   
    app.listen(PORT, () => {
      console.log(`Appp is running at http://localhost:${PORT}`);
    });
  }  
    setupAndstartServer();
