INSERT INTO department (name)
VALUES 
('R&D'),
('Engineering'),
('Clinical'),
('HR'),
('Admin');

INSERT INTO role (title, salary, department_id)
VALUES 
('R&D Engineer', 300000, 1),  
('Engineering Manager', 1500000, 2), 
('Clinical Expert', 125000, 3), 
('HR Manager', 125000, 4), 
('Recruitment Specialist', 250000, 4),
('Relationship Manager', 190000, 4),
('Accountant', 125000, 5), 
('Frontdesk executive', 800000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Mckinley', 1, 10), 
('Smith', 'Bernard-Hall', 1, 20), 
('Allen', 'Twain', 1 ,30), 
('Chris', 'Ireland', 2, 40), 
('Johny', 'Lever', 2, 50);



SELECT employee.id, first_name, last_name, role.title, department.name FROM employee 
LEFT JOIN role ON role.id = employee.manager_id 
INNER JOIN department ON department.id = role.department_id