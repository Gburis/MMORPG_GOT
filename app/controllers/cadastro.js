module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao: {}, values: {}});
}

module.exports.cadastrar = function(application, req, res){
    let dados = req.body;
    req.assert('nome', 'O nome não pode estar vazio').notEmpty();
    req.assert('usuario', 'O usuario não pode estar vazio').notEmpty();
    req.assert('senha', 'O a senha não pode estar vazia').notEmpty();
    req.assert('casa', 'Escolha uma casa').notEmpty();

    let errors = req.validationErrors();

    if(errors){
        res.render('cadastro', {validacao: errors, values: dados});
        return;
    }
    let conn = application.config.dbConnection;
    
    let user = new application.app.models.UsuariosDAO(conn);    

    user.insert(dados);
    
    res.send('cadastrado');
    
}