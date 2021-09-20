const express = require('express');

const app = express();

//Middle wares
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome Bantai');
});

//Listening to port 3000
app.listen(3000, () => {
    console.log('Server started at port: 3000');
});