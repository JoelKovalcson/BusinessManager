async function getDepartments(connection) {
	let [rows] = await connection.execute('SELECT * FROM department');
	return rows;
}

async function addDepartment(connection, department) {
	return await connection.execute('INSERT INTO department (name) VALUES (?)', [department.name]);
}

async function updateDepartment(connection, department) {
	return await connection.execute('UPDATE department SET ? = ? WHERE id = ?', [department.update.col, department.update.value, department.id]);
}

async function deleteDepartment(connection, department) {
	return await connection.execute('DELETE FROM department WHERE id = ?', [department.id]);
}

module.exports = {getDepartments, addDepartment, updateDepartment, deleteDepartment};