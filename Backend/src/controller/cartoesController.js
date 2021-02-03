module.exports={

    // todas as operacoes aqui devem estar associadas a um usuario q tem cartao

async ConsultarConta(req, res){
    return res.json('criado com sucesso'); 
},

async ListaHistoricoConta(req, res){
    return res.json('criado com sucesso');
},

async Saque(req, res){
    const nome=req.params.valor;
    return  res.json({
        message: `Levantamento de: ${nome} realizada com sucesso!`
    });
},

async ValidadeCartao(req, res){
    return res.json('O prazo do seu cartao Expirou!');
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