const express= require ('express');
const schema = require('./schema/schema');
const mongoose= require('mongoose');


//used as a middleware; helps express understan the working of graphql
const grapqlHTTP= require('express-graphql');
const app= express();

mongoose.connect(/*string from DB*/
    "mongodb+srv://shreyanshi:shreyanshi@trial-0i5br.mongodb.net/test?retryWrites=true");
mongoose.connection.once('open',()=>{
    console.log('connected to DB');
});


//whenever a req to /graphql is made, graphHttp would be fired!
app.use('/graphql', grapqlHTTP({
        //schema equals to schema we created!
        //and since both names are same we can simply write schema!
        schema: schema,
        graphiql:true //will be hosted on lpocal server!!

    })
);

//call back function ()=>{}
app.listen(4000, ()=>{
    console.log("listening to port 4000...");
});