module.exports={
    // CRUD = CREATE READ UPDATE DELETE
 async createCliente(req, res){
    return res.json('criado com sucesso');
 },

 async readCliente(req, res){
    return res.json('listado  com sucesso');
 },

 async updateCliente(req, res){
    return res.json('atualizado com sucesso');
},

 async deleteCliente(req, res){
    return res.json('eliminado com sucesso');
}

};