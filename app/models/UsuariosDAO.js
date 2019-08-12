function UsuariosDAO(conn){
    this._connection = conn();
}

UsuariosDAO.prototype.insert = function (users){
   this._connection.open( function(error, mongoClient){
        mongoClient.collection('usuarios', function(error, collection){
            collection.insert(users);
        });
   });
}

module.exports = function(){
    return UsuariosDAO;
}