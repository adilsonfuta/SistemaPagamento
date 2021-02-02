const knex=require('knex');
const config=require('../../knexfile');
const conected=knex(config.development);


module.exports=conected;