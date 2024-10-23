import pg from 'pg';
import { pool, connectToDb } from '../connection.js';
//defines the Department interface
interface Department {
    id: number;
    name: string;
};

//function that selects all the departments from the database and then returns it as an array
const getAllDepartments = async (): Promise<Department[]> => {
    const res = await pool.query(`SELECT * FROM department`)
    return res.rows;
};

//function to add a department to show
const addNewDepartment = async (name: string): Promise<Department> => {
    const res = await pool.query(
        `INSERT INTO department (name) VALUES ($1) RETURNING *`,
        [name]
    );
    return res.rows[0];
};

//able to be imported by other files
export default Department;