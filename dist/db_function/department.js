//import pg from 'pg';
import { pool } from '../connection.js';
;
//function that selects all the departments from the database and then returns it as an array
export const getAllDepartments = async () => {
    const res = await pool.query(`SELECT * FROM department`);
    return res.rows;
};
//function to add a department to show
export const addNewDepartment = async (name) => {
    const res = await pool.query(`INSERT INTO department (name) VALUES ($1) RETURNING *`, [name]);
    return res.rows[0];
};
//able to be imported by other files
//export default Department;
