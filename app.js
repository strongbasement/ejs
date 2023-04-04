const express=require('express');
const app=express();
var items=[];
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.listen(3000,()=>console.log('lissening on 3000'));
var options={
month:'long',
day:'numeric',
weekday:'long'


}

today=new Date();
day=today.toLocaleString("en-US",options);

app.get(

'/',(req,res)=>{

res.render('toddo',{days:day, items:items} );
}



)
app.post('/',(req,res)=>{
    text=req.body.text1;
    items.push(text);
res.redirect('/');
});