module.exports={
    // CRUD = CREATE READ UPDATE DELETE
 async createBanco(req, res){
    return res.json('criado com sucesso');
 },

 async readBanco(req, res){
    return res.json('listado  com sucesso');
 },

 async updateBanco(req, res){
    return res.json('atualizado com sucesso');
},

 async deleteBanco(req, res){
    return res.json('eliminado com sucesso');
},

async smsBanco(req, res){
      let nome=req.params.nome;
    
      return  res.json({
         message: `Bem vindo Cliente ${nome}`
     });
}

};