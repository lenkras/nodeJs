const express = require('express');

const app = express();

const port = 3000;

app.get("/home/user/:name/:age/", (req, res) => {
if (age >= 18)
    return res.send(`Welcome ${req.params.name}, you're ${req.params.age} years old.`);
else
    return res.send(`Hello ${req.params.name}, you're too young.`); 
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});