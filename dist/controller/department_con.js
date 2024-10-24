import inquirer from "inquirer";
import { getAllDepartments, addNewDepartment } from "../db_function/department.js";
//Display all of the departments
export const promptDisplayDepartment = async () => {
    const departments = await getAllDepartments();
    console.table(departments);
};
//Adds new department 
export const promptAddNewDepartment = async () => {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the new department name:',
    });
    const newDepartment = await addNewDepartment(name);
    console.log('Successfully added:', newDepartment);
};
