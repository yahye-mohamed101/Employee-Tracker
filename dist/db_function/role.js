//import pg from 'pg';
import { pool } from '../connection.js';
//function that selects all the roles from the database and then returns it as an array with the department
export const getAllRoles = async () => {
    const res = await pool.query(`
     SELECT r.id, r.title, r.salary, d.name AS department
    FROM role r
    JOIN department d ON r.department_id = d.id
    `);
    return res.rows;
};
//function to add a role
export const addRole = async (title, salary, department_id) => {
    const res = await pool.query(`
    INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *`, [title, salary, department_id]);
    return res.rows[0];
};
