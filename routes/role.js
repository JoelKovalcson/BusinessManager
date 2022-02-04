async function getRoles(connection) {
	let [rows] = await connection.execute('SELECT role.title, role.id, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id');
	return rows;
}

async function addRole(connection, role) {
	return await connection.execute('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [role.title, role.salary, role.department_id]);
}

async function updateRole(connection, role) {
	let exeStr = `UPDATE role SET ${role.update.col} = ? WHERE id = ?`;
	return await connection.execute(exeStr, [role.update.value, role.id]);
}

async function deleteRole(connection, role) {
	return await connection.execute('DELETE FROM role WHERE id = ?', [role.id]);
}

module.exports = {getRoles, addRole, updateRole, deleteRole};