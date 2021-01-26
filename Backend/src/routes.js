const express=require('express');
const routes=express.Router();

const clienteController=require('./controller/clienteController');
const compra=require('./controller/comprasController');



// rotas de clientes CRUD | other Methods
routes.post('/clientes',clienteController.createCliente);

routes.get('/clientes',clienteController.readCliente);

routes.put('cliente/:id',clienteController.updateCliente);

routes.delete('cliente/:id',clienteController.deleteCliente);

// rotas de Produtos 


// rotas de Compras e Produtos




