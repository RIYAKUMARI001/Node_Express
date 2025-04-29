const express = require ('express');
const app = express();//variable - (app) we can define any name, app - object
const port = 3000;
// espress - listen for incoming requests

// port - are the logical endpoints of the network connection that is used to exchange information between a web server and a web client 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});// listen - work with port

// app.use - it allow for any incoming request like get, post, put, delete(always listen)
app.use((req,res) => {
    console.log(req);
    console.log('Data received');
    res.send('Data received in chrome');
     // it will print in the terminal after running in chrome or postman
})

   // Sending a request
   // think we a have a request to send to the server so, we use http (that is basically a text - based because it allow to underastand  any language in server to send the request or listen), but so , here express change text- based http to obj so , javascript can understand.(parsing point of express)
   
   //Response - sending response to server , we use send method// res.send() - send a response to the client
   

   app.use((req,res) => {
    console.log('Data received');
     res.send('Data received in chrome');
    res.send({
        name :"riya",
        age: 19 // we can also pass objects
     })


    // for html 
    const html = '<li>Hello</li><li>World</li>';
    res.send(html);
})

//Routing - It  is a process of selecting a path for Traffic in a network or btw or across mutiple networks.
// if we use app.use - it will listen to all the request (it listen to all the routes even we write http://localhost:3000/help - then also it print in chrome or postman)

// app.get(name ) - returns the value of name app setting 
// we have two argument in this - path  byDefault it is '/'root, callback function

//Reminder - only one response pass like if we use app.get and app.use both then same path won't work , we have  to pass different path to work

// same all thing for post
app.post('/about', (req, res) => {
        res.send('Welcome to about page');
        })

        



