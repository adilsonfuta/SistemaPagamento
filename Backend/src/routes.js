const express=require('express');
const routes=express.Router();

const clienteController=require('./controller/ClienteController');
const cartao=require('./controller/cartoesController');
const userSessao=require('./controller/UserController');
const banco=require('./controller/bancoController');



// rotas de B CRUD | other Methods
routes.post('/addbanco',banco.createBanco);
routes.get('/devolverbancos',banco.readBanco);
routes.put('atualizarbanco/:id',banco.updateBanco);
routes.delete('eliminarbanco/:id',banco.deleteBanco);
routes.get('/extratobancario/:nconta',banco.smsBanco);



// rotas de clientes CRUD | other Methods
routes.post('/addcliente',clienteController.createCliente);
routes.get('/listarcliente',clienteController.readCliente);
routes.put('atualizarcliente/:id',clienteController.updateCliente);
routes.delete('eliminarcliente/:id',clienteController.deleteCliente);

// routes.get('/buscarumcliente/:nome',clienteController.);


// rotas de Banco do Sistema 


// rotas de Cartoes e Movimentaçoes




module.exports=routes;


