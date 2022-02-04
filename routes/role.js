async function getRoles(connection) {
	let [rows] = await connection.execute('SELECT * FROM role');
	return rows;
}

async function addRole(connection, role) {
	return await connection.execute('INSERT INTO role (title, salary, department_id) VALUES (?)', [role.title, role.salary, role.department_id]);
}

async function updateRole(connection, role) {
	return await connection.execute('UPDATE role SET ? = ? WHERE id = ?', [role.update.col, role.update.value, role.id]);
}

async function deleteRole(connection, role) {
	return await connection.execute('DELETE FROM role WHERE id = ?', [role.id]);
}

module.exports = {getRoles, addRole, updateRole, deleteRole};