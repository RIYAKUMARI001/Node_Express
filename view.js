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
 app.use(express.static('public'));//like we have by default name views folder for template that same way we have by default name public folder for static files
 app.set('view engine', 'ejs');
 app.get('/', (req, res) => {
     res.render('home.ejs');
 })
 
 //view engine  - mean (template)
 
 app.get('/rolldice',(req,res)=>{
    let dice = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs', {num :dice});
 })


 //instagram page and follower-list
//  app.get('/instagram/:usename', (req, res) => {
//     let followers = ["adam", "joe", "Bob"];
//     let usename = req.params.usename;
//     res.render('instagram.ejs', { usename, followers });
// });

app.get('/instagram/:usename', (req, res) => {
    let {usename} = req.params;
    let instaData = require('./data.json');
    let data = instaData[usename];
    if(data){
        res.render("instagram.ejs", {data});
    }
    else{
        res.render('error.ejs');
    }
        
});
// res
const filter = (req, res) => {
    let {username} = req.params;
    let instaData = require('./data.json');
    let data = instaData[username];
    if(data){
        res.render("instagram.ejs", (fetch));
    }
    else {
        res.render('error.ejs');
    }
}





