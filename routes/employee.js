async function getEmployees(connection) {
	let [rows] = await connection.execute("SELECT E.id, E.first_name, E.last_name, role.title, department.name AS department, role.salary, CONCAT(M.first_name, ' ', M.last_name) AS manager FROM employee AS E LEFT JOIN employee AS M ON E.manager_id = M.id LEFT JOIN role ON role.id=E.role_id LEFT JOIN department ON role.department_id=department.id");
	return rows;
}

async function addEmployee(connection, employee) {
	return await connection.execute('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [employee.first_name, employee.last_name, employee.role_id, employee.manager_id]);
}

async function updateEmployee(connection, employee) {
	let exeStr = `UPDATE employee SET ${employee.update.col} = ? WHERE id = ?`;
	return await connection.execute(exeStr, [employee.update.value, employee.id]);
}

async function deleteEmployee(connection, employee) {
	return await connection.execute('DELETE FROM employee WHERE id = ?', [employee.id]);
}

module.exports = {getEmployees, addEmployee, updateEmployee, deleteEmployee};