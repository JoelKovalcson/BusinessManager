async function getRoles(connection) {
	let [rows] = await connection.execute('SELECT * FROM role');
	return rows;
}

async function addRole(connection, role) {
	return await connection.execute('INSERT INTO role (title, salary, role_id) VALUES (?)', [role.title, role.salary, role.role_id]);
}

async function updateRole(connection, role) {
	let exeStr = `UPDATE role SET ${role.update.col} = ? WHERE id = ?`;
	return await connection.execute(exeStr, [role.update.value, role.id]);
}

async function deleteRole(connection, role) {
	return await connection.execute('DELETE FROM role WHERE id = ?', [role.id]);
}

module.exports = {getRoles, addRole, updateRole, deleteRole};