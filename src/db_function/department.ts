//import pg from 'pg';
import { pool } from '../connection.js';


//defines the Department interface
export interface Department {
    id: number;
    name: string;
};

//function that selects all the departments from the database and then returns it as an array
export const getAllDepartments = async (): Promise<void> => {
    await pool.query(`SELECT * FROM department`)

};

//function to add a department to show
export const addNewDepartment = async (name: string): Promise<void> => {
     await pool.query(
        `INSERT INTO department (name) VALUES ($1) RETURNING *`,
        [name]
    );
   
};

//able to be imported by other files
//export default Department;