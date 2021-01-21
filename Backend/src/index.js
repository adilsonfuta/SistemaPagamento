const express=require('express');
const app=express();


app.get('/',(req, res)=>{
     return res.json('sucesso');
});

// CRUD Produto 

app.post('/adicionarcliente',(req,res)=>{
        const 
});

// CRUD Produto 



app.listen(3333, ()=>console.log('server online'));
