module.exports={
        // CRUD produtos {id, nome, descricao, categoria, datafab, datavalidade,precoUnitario, quantidade }
    async createCliente(req, res){
        return res.json('sucesso');
    }, 

    async readCliente(req, res){
        return res.json('sucesso');
    }, 

    async  updateCliente(req, res){
        let id=req.params.id;
    
        return  res.json({
           message: `Bem vindo Cliente ${id}`
       });
    },

    async deleteCliente(req, res){
        return res.json('sucesso');
    },
    
    async FiltarCliente(req, res){
        let nome=req.params.nome;
      
        return  res.json({
           message: `Bem vindo Cliente ${nome}`
       });
  }


};