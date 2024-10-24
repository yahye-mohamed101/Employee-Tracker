INSERT INTO department (name)
VALUES  ('Software Department'),
        ('Hardware Department'),
        ('AI Department'),
        ('Cloud Department');


INSERT INTO role (id, title, salary, department_id)
VALUES  (011, 'Team Lead', 200000, 004),
        (012, 'Senior Engineer', 175000, 001),
        (013, 'Junior Engineer', 125000, 003),
        (014, 'Manager', 250000, 002),
        (015, 'Mid-level Engineer', 150000, 002);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Doe', 'Mo', 011, NULL),
        ('John', 'Doe', 012, NULL),
        ('Ron', 'Soe', 013, NULL),
        ('Mon', 'Goe', 014, NULL),
        ('Eon', 'Loe', 015, 001);
        
