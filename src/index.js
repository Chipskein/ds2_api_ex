//console.clear();
const express=require('express');
const LogServices = require('./utils/LogService');
const app=express();
const port=process.env.PORT | 8080;

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('public'));

app.use('*',(req,res,next)=>{
    LogServices.log(req.url);
    return next();
})

const moviesRoutes=require('./routes/moviesRoutes');
app.use('/movies',moviesRoutes);

app.use('*',(req,res)=>{
    LogServices.warning('Redirect to /movies')
    return res.redirect('/movies');
})
app.listen(port,()=>LogServices.success(`Starting Server on ${port}`));