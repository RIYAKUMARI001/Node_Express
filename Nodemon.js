//Nodemon - To automatically restart server with code changes.

//Path Parameter

const express = require ('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});// listen - work with port

app.get('/:users/:id', (req, res) => {
    let { users , id} = req.params;
  let htmlStr = `<h1>hello ${users} with id ${id}</h1>`;
  res.send(htmlStr);
})

//query
app.get('/search', (req, res) => {
    let { q } = req.query;
    let htmlStr = `<h1>Select query is : ${q}</h1>`;
    res.send(htmlStr);
  })

  
