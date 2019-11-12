const express = require('express'); // to use the dependencies we use keyword express

const app = express();

app.get('/',(req,res)=> {
    res.send('Hello')
});




app.listen(
    3000,()=>{
    console.log('Server Running')
});
