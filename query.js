const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: 'localhost', 
     user:'yy316004', 
     password: 'yy209036',
     database:'testdb',
     connectionLimit: 5
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT * FROM user");
    console.log(rows[0].name); //[ {val: 1}, meta: ... ]
  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

asyncFunction();
asyncFunction();