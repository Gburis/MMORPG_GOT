var mongo = require('mongodb').MongoClient;

var connMongoDB  = function(){
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'kit-corretor-axa-dev.onibusiness.com.br',
            27017,
            {},

        ),
        {}
    );
    return db;
}

module.exports = function(){
    return connMongoDB;
}