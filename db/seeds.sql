INSERT INTO department (name)
VALUES ('R&D'), ('Engineering'), ('Clinical'), ('HR'), ('Admin');

INSERT INTO role (title, salary, department_id)
VALUES ('R&D Head', 300000, 1), 
('R&D Manager', 200000, 1),
('R&D Engineer', 100000, 1), 

('Engineering Manager', 1500000, 2), 
('Software Engineer', 120000, 2), 
('Software Test Engineer', 100000, 2),
('Sr. Software Test Engineer', 120000, 2), 

('Clinical Expert', 125000, 3), 

('HR Manager', 125000, 4), 
('Recruitment Specialist', 250000, 4),
('Relationship Manager', 190000, 4),

('Accountant', 125000, 5), 
('Frontdesk executive', 800000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('John', 'Mckinley', 1, null), 
('Smith', 'Bernard-Hall', 1, null), 
('Allen', 'Twain', 1 ,2), 
('Chris', 'Ireland', 2, null), 
('Johny', 'Lever', 2, 1), 
('Joe', 'Hollenbeck', 3, 1),
('Tiffany', 'Ngyuen', 3, 2), 
('Patrick', 'Simon', 4, null), 
('Grace', 'Philips', 4, 1), 
('Kristin', 'Baker', 5, 1);
