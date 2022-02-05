async function getDepartments(connection) {
	let [rows] = await connection.execute("SELECT department.name AS 'Department Name', department.id FROM department");
	return rows;
}

async function addDepartment(connection, department) {
	return await connection.execute('INSERT INTO department (name) VALUES (?)', [department.name]);
}

async function updateDepartment(connection, department) {
	let exeStr = `UPDATE department SET ${department.update.col} = ? WHERE id = ?`;
	return await connection.execute(exeStr, [department.update.value, department.id]);
}

async function deleteDepartment(connection, department) {
	return await connection.execute('DELETE FROM department WHERE id = ?', [department.id]);
}

async function getEmployees(connection, department) {
	let [rows] = await connection.execute('SELECT employee.first_name, employee.last_name FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ?', [department.id]);
	return rows;
}

async function getBudget(connection, department) {
	let [rows] = await connection.execute('SELECT department.name, SUM(role.salary) AS budget FROM department LEFT JOIN role ON role.department_id = department.id LEFT JOIN employee ON employee.role_id = role.id WHERE department.id = ?', [department.id]);
	return rows;
}

module.exports = {getDepartments, addDepartment, updateDepartment, deleteDepartment, getEmployees, getBudget};