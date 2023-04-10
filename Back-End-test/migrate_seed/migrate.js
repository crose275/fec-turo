const { Pool } = require("pg")
const fs = require("fs")

const POSTGRES_HOST = '127.0.0.1';
const POSTGRES_DB =  'Turo_webpage';
const POSTGRES_USER =  'postgres';
const POSTGRES_PASSWORD = 'password';

// Connect to database
const dbConfig = {
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  multipleStatements: true, // IMPORTANT
}

const pool = new Pool(dbConfig);

console.log("Running SQL migrate...")

const migrateQuery = fs.readFileSync('migrate_seed/db/migrate.sql', { encoding: 'utf8' })

  pool.query(migrateQuery, (err, res) => {
    if (err)
      console.log(err)
    else
      console.log('Migrate Completed!')
      pool.end()
  })
