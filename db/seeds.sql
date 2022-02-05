INSERT INTO department
	(name)
	VALUES 
	('Management'),
	('Development'),
	('Human Resources');

INSERT INTO role
	(title, salary, department_id)
	VALUES
	('CEO', 250000, 1),
	('Junior Developer', 60000, 2),
	('Senior Developer', 100000, 2),
	('HR Representative', 75000, 3),
	('Team Lead', 150000, 1);

INSERT INTO employee
	(first_name, last_name, role_id, manager_id)
	VALUES 
	/* CEO */
	('Sean', 'Kline', 1, NULL),
	/* Team Leads */
	('Ceara', 'Caldwell', 5, 1),
	('Ahmet', 'Ortiz', 5, 1),
	/* Senior Developers */
	('Reginald', 'Sanchez', 3, 2),
	('Kelsea', 'Daly', 3, 2),
	/* Junior Developers */
	('Cem', 'Davenport', 2, 4),
	('Matylda', 'Hester', 2, 4),
	('Ursula', 'Lane', 2, 5),
	('Dania', 'Harper', 2, 5),
	('Rania', 'Hubbard', 2, 5),
	/* HR Reps */
	('Ahsan', 'Bob', 4, 3),
	('Micah', 'Blackmore', 4, 3);