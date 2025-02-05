const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const res = require('express/lib/response');
const dishRouter=require('./routes/dishRouter.js');
const promoRouter=require('./routes/promoRouter.js');
const leaderRouter=require('./routes/leaderRouter.js');

const hostname='localhost';
const port=3000;

const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes/',dishRouter);
app.use('/promotions/',promoRouter);
app.use('/leaders',leaderRouter);

/*
app.all('/dishes', (req,res,next)=>{
    res.statusCode=200;
    res.setHeader('context-type','text/plain');
    next();
});

app.get('/dishes',(req,res,next)=>{
    res.end('Will send all the dishes to you!');
});

app.post('/dishes',(req,res,next)=>{
    res.end('Will add the dish: '+req.body.name+
    ' with details: '+req.body.description);
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported for /dishes/');
});

app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting all the dishes!');
});

app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send the dish:'+req.params.dishId+' to you!');
});

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported for /dishes'
    +req.params.dishId);   
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish: '+req.params.dishId);
    res.end('\nWill add the dish: '+req.body.name+
    ' with details: '+req.body.description);
});

app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Deleting the dish:'+req.params.dishId);
});
*/
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
//    console.log(req.headers);

    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});