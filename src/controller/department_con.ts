import inquirer from "inquirer";
import { Department, getAllDepartments, addNewDepartment } from "../db_function/department.js";

//Display all of the departments
export const promptDisplayDepartment = async (): Promise<void> => {
    const departments: Department[] = await getAllDepartments();
    console.table(departments);
};

//Adds new department 
export const promptAddNewDepartment = async (): Promise<void> => {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the new department name:',
});

    const newDepartment: Department = await addNewDepartment(name);
    console.log('Department added:', newDepartment);
};
