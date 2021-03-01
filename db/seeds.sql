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
('Software Engineer', 150000, 2), 
('Clinical Expert', 125000, 3), 
('HR Manager', 125000, 4), 
('Frontdesk executive', 800000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('John', 'Mckinley', 1, 3), 
('Smith', 'Bernard-Hall', 2, 3), 
('Allen', 'Twain', 3 ,4), 
('Chris', 'Ireland', 4, null), 
('Johny', 'Lever', 5, 4);




