import pg from 'pg';
import { pool, connectToDb } from '../connection.js';

export interface Role {
    id: number;
    title: string;
    salary: number;
    department_id: number;
}

//function that selects all the roles from the database and then returns it as an array with the department
export const getAllRoles = async (): Promise<Role[]> => {
    const res = await pool.query(`
    SELECT role.id, role.title, role.salary, department.name AS department
    FROM role
    JOIN department ON role.department_id = department.id
    `);
    return res.rows;
};

//function to add a role
export const addRole = async (title: string, salary: number, department_id: number): Promise<Role> => {
    const res = await pool.query(`
    INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *`,
        [title, salary, department_id]
    );
    return res.rows[0]
};

export default Role


