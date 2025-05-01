//Templating(fixed layout , where we pass some data acc to that it give result (Blueprint))
  //EJS- Embedded javascript templates

 // EJS- it is a simple templating language that lets you generate html markup with plain javascript (tool)

 const express = require ('express');
 const app = express(); // we don't have to require ejs because express already use it internally
 const port = 8080;
 
 app.listen(port, () => {
     console.log(` app listening at http://localhost:${port}`);
 });// listen - work with port
 
 
 //using ejs - we not send(string , html) a response we use render means we are sending  a big files
 app.set('view engine', 'ejs');
 app.get('/', (req, res) => {
     res.render('home.ejs');
 })
 
 //view engine  - mean (template)
 
 app.get('/rolldice',(req,res)=>{
    res.render('rolldice.ejs');
 })