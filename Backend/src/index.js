const express=require('express');
const cors=require('cors');
const rotas=require('./routes');




const app=express();
//app.use(cors());

// app.use(cors({
//         origin:'http:localhost:3000',
// }))

app.use(express.json());
app.use(rotas);

app.listen(3333, ()=>console.log('****** Server Started *******'));
