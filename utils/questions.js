const inquirer = require('inquirer');

const questions = {
	mainPrompt: [{
		type: 'list',
		name: 'mainMenu',
		message: 'Please pick an option from the following:',
		choices: [
			'View All Departments',
			//'View Department Budget',
			'View All Roles',
			'View All Employees',
			//"View Manager's Employees",
			'Add Department',
			'Add Role',
			'Add Employee',
			'Update Employee',
			//'Delete Department',
			//'Delete Role',
			//'Delete Employee',
			'Quit'
		]
	}],
	addDepartment: [{
		type: 'input',
		name: 'addDepartmentName',
		message: 'Please enter the name of the new department:',
		validate: addDepartmentInput => {
			// TODO: Add checking to make sure name doesn't already exist in database
			if (addDepartmentInput) return true;
			else return 'Please enter a department name!'
		}
	}],
	addRole: [{
			type: 'input',
			name: 'addRoleName',
			message: 'Please enter the name of the new role:',
			validate: addRoleInput => {
				if (addRoleInput) return true;
				else return 'Please enter a role name!'
			}
		},
		{
			type: 'input',
			name: 'addRoleSalary',
			message: 'Please enter the salary for this role:',
			validate: addRoleInput => {
				if (parseFloat(addRoleInput)) return true;
				else return 'Please enter a valid salary!'
			}
		},
		{
			type: 'list',
			name: 'addRoleDepartment',
			message: 'Please choose a department for this role:'
			// choices will be filled in dynamically
		}
	],
	addEmployee: [{
			type: 'input',
			name: 'addEmployeeFirst',
			message: "Please enter the employee's first name:",
			validate: addEmployeeInput => {
				if (addEmployeeInput) return true;
				else return 'Please enter a valid name!'
			}
		},
		{
			type: 'input',
			name: 'addEmployeeLast',
			message: "Please enter the employee's last name:",
			validate: addEmployeeInput => {
				if (addEmployeeInput) return true;
				else return 'Please enter a valid name!'
			}
		},
		{
			type: 'list',
			name: 'addEmployeeRole',
			message: 'Please choose a role for this employee:'
			// choices will be filled in dynamically
		},
		{
			type: 'list',
			name: 'addEmployeeManager',
			message: 'Please choose a manager for this employee:',
			// choices will be filled in dynamically
		}
	],
	updateEmployee: [
		{
			type: 'list',
			name: 'updateEmployeeField',
			message: 'Please choose a field to change for this employee:',
			choices: [
				'First Name',
				'Last Name',
				'Role',
				'Manager'
			]
		},
		{
			type: 'input',
			name: 'updateEmployeeFirst',
			message: "Please enter the employee's first name:",
			validate: addEmployeeInput => {
				if (addEmployeeInput) return true;
				else return 'Please enter a valid name!'
			},
			when: ({
				updateEmployeeField
			}) => updateEmployeeField == 'First Name'
		},
		{
			type: 'input',
			name: 'updateEmployeeLast',
			message: "Please enter the employee's last name:",
			validate: addEmployeeInput => {
				if (addEmployeeInput) return true;
				else return 'Please enter a valid name!'
			},
			when: ({
				updateEmployeeField
			}) => updateEmployeeField == 'Last Name'
		},
		{
			type: 'list',
			name: 'updateEmployeeRole',
			message: 'Please choose a role for this employee:',
			when: ({
				updateEmployeeField
			}) => updateEmployeeField == 'Role'
			// choices will be filled in dynamically
		},
		{
			type: 'list',
			name: 'updateEmployeeManager',
			message: 'Please choose a manager for this employee:',
			when: ({
				updateEmployeeField
			}) => updateEmployeeField == 'Manager'
		}
	]
}

module.exports = questions;