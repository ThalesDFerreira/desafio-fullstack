require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const config = {
  username: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
  host: PGHOST,
  port: 5432,
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
    ssl: {
      require: true, // Força o uso de SSL
      rejectUnauthorized: false // Permite a conexão mesmo que o certificado SSL não seja verificado (não recomendado em produção)
    }
  },
};

module.exports = config;
