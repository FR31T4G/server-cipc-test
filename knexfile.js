// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite',
      host : '192.168.1.103',
      user : 'CipcDeccor@2021',
      password : 'pdeccorodeicotdedepplicecarccpdepP0998dr1',
      database : 'cipcgest'
      
    },
    migrations:{
      directory: './src/database/migrations'
    }
    
    
  },


};

