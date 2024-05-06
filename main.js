const express = require('express');
const app = express();

app.get('/',(res,req)=>{
res.send('ok');
});





app.listen(3000);