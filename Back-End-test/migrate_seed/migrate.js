const { Pool } = require("pg")
const fs = require("fs")

const POSTGRES_HOST = 'ec2-3-208-74-199.compute-1.amazonaws.com' || 'postgres'
const POSTGRES_DB =  'db2a924gf5p4sd' || 'Turo_webpage';
const POSTGRES_USER =  'oxubpjhkxcbbwh' || 'postgres';
const POSTGRES_PASSWORD = 'e07dcf9f202d697e727fa8e907dbad13523c5c0386de42f3bbee94920f09fd70' || 'password';

// Connect to database
const dbConfig = {
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  port: 5432,
  connectionString: process.env.DATABASE_URL, 
  ssl: {
      rejectUnauthorized: false
  },
  multipleStatements: true, // IMPORTANT
}

const pool = new Pool(dbConfig);
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log(process.env.DATABASE_URL)
  console.log('Connected to database')
})

console.log("Running SQL migrate...")

const migrateQuery = fs.readFileSync('./db/migrate.sql', { encoding: 'utf8' })

  pool.query(migrateQuery, (err, res) => {
    if (err)
      console.log(err)
    else
      console.log('Migrate Completed!')
      pool.end()
  })
