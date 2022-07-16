import pg  from 'pg'
const { Pool } = pg


export const pool = new Pool({
  user: 'diamond',
  host: '54.94.26.36',
  database: 'hotel',
  password: 'lksdfgj53fd',
  port: 5432,
})

export default pool	