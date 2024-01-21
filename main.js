const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=> {
    return res.json({message: "Hey, It's me, having fun learning docker"})
});

app.listen(PORT, () => console.log(`Server started:PORT${PORT}`))