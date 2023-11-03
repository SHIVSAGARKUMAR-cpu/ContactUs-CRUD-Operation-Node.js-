const Express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/Router/Router');
port = 9090;

const app = Express();
 

app.use(bodyParser.urlencoded({
   extended : true,
   limit : '50mb',
   parameterLimit : 10000000
}));

app.use(bodyParser.json());

app.use("/api/", router);

app.listen(port , ()=>{
   console.log("Server is running at port : ", port);
})