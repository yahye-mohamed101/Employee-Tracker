import pg from 'pg';
import { pool, connectToDb } from '../connection.js';
//defines the Department interface
interface Department {
    id: number;
    name: string;
};

//function to get all departments
const getAllDepartments = async (): Promise<Department[]> => {
    const res = await pool.query(`SELECT * FROM department`)
    return res.rows;
};