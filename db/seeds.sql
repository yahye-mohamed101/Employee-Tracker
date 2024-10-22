INSERT INTO department (id, name)
VALUES  (001, 'Software Department'),
        (002, 'Hardware Department'),
        (003, 'AI Department'),
        (004, 'Cloud Department'),


INSERT INTO role (id, title, salary, department_id)
VALUES  (011, 'Team Lead', 200000, 004),
        (012, 'Senior Engineer', 175000, 001),
        (013, 'Junior Engineer' 125000, 003),
        (014, 'Manager', 250000, 002),
        (015, 'Mid-level Engineer', 150000, 002),


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (021, 'Doe', 'Mo', 011,),
        (002, 'John', 'Doe', 012),
        (003, 'Ron', 'Soe', 013),
        (004, 'Mon', 'Goe', 014),
        (004, 'Eon', 'Loe', 015, 021),
        
