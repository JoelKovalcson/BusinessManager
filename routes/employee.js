async function getEmployees(connection) {
	let [rows] = await connection.execute('SELECT * FROM employee');
	return rows;
}

async function addEmployee(connection, employee) {
	return await connection.execute('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)', [employee.first_name, employee.last_name, employee.role_id, employee.manager_id]);
}

async function updateEmployee(connection, employee) {
	return await connection.execute('UPDATE employee SET ? = ? WHERE id = ?', [employee.update.col, employee.update.value, employee.id]);
}

async function deleteEmployee(connection, employee) {
	return await connection.execute('DELETE FROM employee WHERE id = ?', [employee.id]);
}

module.exports = {getEmployees, addEmployee, updateEmployee, deleteEmployee};