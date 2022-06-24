const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`The express server now is running on PORT ${PORT} `)
});

app.get('/', (req, res)=>{
    res.send('This is a message from backend')
});

