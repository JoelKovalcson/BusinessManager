const mysql = require('mysql2/promise');
require('dotenv').config();

async function main() {
	const connection = await mysql.createConnection({host: 'localhost', user: process.env.DB_USER, password: process.env.DB_PW, database: process.env.DB_NAME});

	
}

main();