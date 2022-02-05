const {
	Department,
	Employee,
	Role
} = require('./routes');
require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const questions = require('./utils/questions');
require('dotenv').config();

async function main() {
	const connection = await mysql.createConnection({
		host: 'localhost',
		user: process.env.DB_USER,
		password: process.env.DB_PW,
		database: process.env.DB_NAME
	});

	let response;
	while ((response = await inquirer.prompt(questions.mainPrompt)).mainMenu != 'Quit') {

		if (response.mainMenu == 'View All Departments') {
			console.table(await Department.getDepartments(connection));
		} else if (response.mainMenu == 'View Department Budget') {
			let departments = await Department.getDepartments(connection);

			let choices = [];
			let ids = [];

			for (let department of departments) {
				choices.push(department['Department Name']);
				ids.push(department.id);
			}

			questions.getBudget[0].choices = choices;

			let answers = await inquirer.prompt(questions.getBudget);

			console.table(await Department.getBudget(connection, {
				id: ids[choices.indexOf(answers.departmentSelect)]
			}))
		} else if (response.mainMenu == 'View All Roles') {
			console.table(await Role.getRoles(connection));
		} else if (response.mainMenu == 'View All Employees') {
			console.table(await Employee.getEmployees(connection));
		} else if (response.mainMenu == 'Add Department') {
			let answers = await inquirer.prompt(questions.addDepartment);

			let checkValid = await Department.addDepartment(connection, {
				name: answers.addDepartmentName
			});

			if (checkValid[0].affectedRows != 1) console.log('Error adding department to database!');
		} else if (response.mainMenu == 'Add Role') {
			let departments = await Department.getDepartments(connection);

			let choices = [];
			let ids = [];

			for (let department of departments) {
				choices.push(department['Department Name']);
				ids.push(department.id);
			}

			questions.addRole[2].choices = choices;

			let answers = await inquirer.prompt(questions.addRole);

			let checkValid = await Role.addRole(connection, {
				title: answers.addRoleName,
				salary: answers.addRoleSalary,
				department_id: ids[choices.indexOf(answers.addRoleDepartment)]
			});

			if (checkValid[0].affectedRows != 1) console.log('Error adding role to database!');
		} else if (response.mainMenu == 'Add Employee') {
			let managers = await Employee.getEmployees(connection);
			let roles = await Role.getRoles(connection);



			for (let role of roles) {
				roleChoices.push(role.title);
				roleIds.push(role.id);
			}

			for (let mgr of managers) {
				mgrChoices.push(`${mgr.first_name} ${mgr.last_name}`);
				mgrIds.push(mgr.id);
			}

			mgrChoices.push('None');
			mgrIds.push(NULL);

			questions.addEmployee[2].choices = roleChoices;
			questions.addEmployee[3].choices = mgrChoices;

			let answers = await inquirer.prompt(questions.addEmployee);

			let checkValid = await Employee.addEmployee(connection, {
				first_name: answers.addEmployeeFirst,
				last_name: answers.addEmployeeLast,
				role_id: roleIds[roleChoices.indexOf(answers.addEmployeeRole)],
				manager_id: mgrIds[mgrChoices.indexOf(answers.addEmployeeManager)]
			});

			if (checkValid[0].affectedRows != 1) console.log('Error adding employee to database!');
		} else if (response.mainMenu == 'Update Employee') {
			let employees = await Employee.getEmployees(connection);
			let roles = await Role.getRoles(connection);

			let roleChoices = [];
			let roleIds = [];

			let empChoices = [];
			let empIds = [];

			for (let role of roles) {
				roleChoices.push(role.title);
				roleIds.push(role.id);
			}

			for (let mgr of employees) {
				empChoices.push(`${mgr.first_name} ${mgr.last_name}`);
				empIds.push(mgr.id);
			}

			empChoices.push('None');
			empIds.push(null);

			questions.updateEmployee[0].choices = empChoices.slice(undefined, -1);
			questions.updateEmployee[4].choices = roleChoices;
			questions.updateEmployee[5].choices = empChoices;

			let answers = await inquirer.prompt(questions.updateEmployee);

			let update;
			if (answers.updateEmployeeFirst) update = {
				col: 'first_name',
				value: answers.updateEmployeeFirst
			};
			else if (answers.updateEmployeeLast) update = {
				col: 'last_name',
				value: answers.updateEmployeeLast
			};
			else if (answers.updateEmployeeRole) update = {
				col: 'role_id',
				value: roleIds[roleChoices.indexOf(answers.updateEmployeeRole)]
			};
			else if (answers.updateEmployeeManager) update = {
				col: 'manager_id',
				value: empIds[empChoices.indexOf(answers.updateEmployeeManager)]
			};

			let checkValid = await Employee.updateEmployee(connection, {
				update,
				id: empIds[empChoices.indexOf(answers.updateEmployeeChoice)]
			})

			if (checkValid[0].affectedRows != 1) console.log('Error updating employee in database!');
		}
	}
	// Quit the program if quit is chosen
	process.exit(0);
}

main();