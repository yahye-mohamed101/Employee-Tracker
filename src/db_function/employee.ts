import pg from 'pg';
import { pool, connectToDb } from '../connection.js';

interface Employee {
    first_name: string;
    last_name: string;
    id: number;
    role_id: number;
    manager_id?: number;

}

//function that selects all the employees from the database and then returns it as an array with their roles, departments, and managers
const getAllEmployees = async (): Promise<Employee[]> => {
    const res = await pool.query(`
     SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, 
        m.first_name AS manager_first, m.last_name AS manager_last,
 FROM employee e
 JOIN role r ON e.role_id = r.id
 JOIN department d ON r.department_id = d.id
 LEFT JOIN employee m ON e.manager_id = m.id
 `);
    return res.rows;
}

//function to add an employee along with their first and last name, role id, and a manager id if they have a manager
const addEmployee = async (first_name: string, last_name: string, role_id: number, manager_id: number | null): Promise<Employee> => {
    const res = await pool.query(
        `INSERT INTO employee ('first_name, last_name, role_id, manager_id') VALUES ($1, $2, $3, $4) RETURNING *`,
        [first_name, last_name, role_id, manager_id, ]
    );
    return res.rows[0];
};
//function to delete employee. (For now)
const deleteEmployee = async (id: number): Promise<void> => {
     await pool.query(`DELETE FROM employee WHERE id = $1,` [id]);
    ;
};

//function to update employee's role
const updateEmployee = async (employee_id: number, role_id: number): Promise<void> => {
    await pool.query(
        `UPDATE employee SET role_id = $1 WHERE id = $2`,
        [role_id, employee_id]
    )
}

//able to be imported by other files
export default Employee;