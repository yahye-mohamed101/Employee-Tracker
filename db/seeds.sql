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


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (021, 'Doe', 'Mo', 011, NULL),
        (002, 'John', 'Doe', 012, NULL),
        (003, 'Ron', 'Soe', 013, NULL),
        (004, 'Mon', 'Goe', 014, NULL),
        (005, 'Eon', 'Loe', 015, 021);
        
