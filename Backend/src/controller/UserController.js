module.exports={


    // CRUD user{ id, nome, email, username, password, nivelacesso}

    async createUser(req, res){
        return res.json('sucesso');
    },

    async readUser(req, res){
        return res.json('sucesso');    },

    async updateUser(req, res){
        return res.json('sucesso');
    },
    async deletarUser(req, res){
        return res.json('sucesso');
    },

    async sessaoInicial(req, res){
        return res.json('sucesso');
    },

    async listaNivelacessosPorUser(req,res){
        return res.json('teste de nivel de acesso')
    }





};