const express=require('express');
const routes=express.Router();

const clienteController=require('./controller/bancoController');
const compra=require('./controller/cartoesController');



// rotas de clientes CRUD | other Methods
routes.post('/addcliente',clienteController.createCliente);

routes.get('/listarcliente',clienteController.readCliente);

routes.put('atualizarcliente/:id',clienteController.updateCliente);

routes.delete('eliminarcliente/:id',clienteController.deleteCliente);

routes.get('/buscarumcliente/:nome',clienteController.informarClientes);

// rotas de Produtos 


// rotas de Compras e Produtos

module.exports=routes;


