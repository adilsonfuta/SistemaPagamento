module.exports={
  
  

 async createBanco(req, res){
   let banco={
      "id":1,
      "nome":"BAI",
      "sede":"Talatona",
      "nfilial":5,
      "datacriacao":"20/01/1982"
   }
    return res.json({banco});
 },

 async readBanco(req, res){
    return res.json('listado  com sucesso');
 },

 async updateBanco(req, res){
     let id=req.params.id;
    
    return  res.json({
       message: `Bem vindo Cliente ${id}`
   });
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