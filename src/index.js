 setupAndstartServer= async()=>{


    const {PORT} = require('./config/serverConfig');
    const express = require('express');
    const app = express();
    const port = PORT || 3000;
   
    app.listen(PORT, () => {
      console.log(`Appp is running at http://localhost:${PORT}`);
    });
  }  
    setupAndstartServer();
