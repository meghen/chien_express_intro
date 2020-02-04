const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

let quotes = [
    {quote: 'this is literally serious', who: 'princess bubblegum'},
    {quote: 'woof', who: 'Chien cohort'},
    {quote: 'you are in a cult, call your dad', who: 'MFM'},

];
console.log('this is quotes: ', quotes);

app.get('/quotes', function(req, res){
    console.log('we are in the get request');
    res.send(quotes);
})

//app.listen usually goes on the bottom
app.listen(port, () =>{
    console.log('listening on Port: ', port);
});