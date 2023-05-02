require('dotenv').config(); console.log(process.env)


module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        host: 'localhost',
        user: 'morpheus',
        password: 'Blastoise42*',
        database: 'intentum_hostinger'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations'
      }
    },
  
    production: {
      client: 'mysql2',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
      },

      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations'
      }
    }
  };
  