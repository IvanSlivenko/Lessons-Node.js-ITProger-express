const express = require('express')

const app = express()
app.get('/', (req, res) => { 
    res.send('This home page')
})

app.get("/about", (req, res) => {
  res.send("Про нас");
});

app.get("/user/:username/:lastname/:id", (req, res) => {
  res.send(`UserName: ${req.params.username}. 
   LastName: ${req.params.lastname}.User ID: ${req.params.id}`);
});


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});