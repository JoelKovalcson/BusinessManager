INSERT INTO department
	(name)
	VALUES 
	('Marketing'),
	('Development'),
	('Human Resources');

INSERT INTO role
	(title, salary, department_id)
	VALUES
	('Analyst', 80000, 1),
	('Software Developer', 60000, 2),
	('Lead Designer', 100000, 2),
	('HR Representative', 75000, 3),
	('CEO', 150000, NULL);

INSERT INTO employee
	(first_name, last_name, role_id, manager_id)
	VALUES 
	('CEO', 'Person', 5, NULL),
	('Boss', 'Developer', 2, 1),
	('John', 'Doe', 2, 2),
	('Another', 'Person', 4, NULL),
	('Marketing', 'Team', 1, 1);