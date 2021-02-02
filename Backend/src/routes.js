const express=require('express');
const routes=express.Router();

const clienteController=require('./controller/ClienteController');
const cartao=require('./controller/cartoesController');
const userSessao=require('./controller/UserController');
const banco=require('./controller/bancoController');


// rotas de Banco do Sistema  CRUD | other Methods
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
routes.get('/buscarCliente/:nome',clienteController.filtarCliente);

// rotas de Cartoes e Movimentaçoes

routes.get('/consultarconta/:nconta',cartao.ConsultarConta);
routes.get('/historico',cartao.ListaHistoricoConta);
routes.get('/saque/:valor',cartao.Saque);
routes.get('/validadecartao',cartao.ValidadeCartao);
routes.post('/poupancabancaria',cartao.PoupancaBancaria);
routes.post('/transferencia',cartao.transferencia);




module.exports=routes;


