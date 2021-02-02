module.exports={

async ConsultarConta(req, res){
    return res.json('criado com sucesso'); 
},

async ListaHistoricoConta(req, res){
    return res.json('criado com sucesso');
},

async Saque(req, res){
    return res.json('criado com sucesso');
},

async ValidadeCartao(req, res){
    return res.json('criado com sucesso');
},

async PoupancaBancaria(req, res){
    return res.json('criado com sucesso');
},

async transferencia(req, res){
    const nome=20000;
    return  res.json({
        message: `transferencia de  ${nome} realizada com sucesso`
    });
}


    
      

};