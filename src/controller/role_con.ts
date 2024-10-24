import inquirer from "inquirer";
import { getAllRoles, addRole } from '../db_function/role.js';
import { getAllDepartments } from "../db_function/department.js";

//function that will display roles
export const promptDisplayRole = async ()=> {
    const roles = await getAllRoles();
    console.table(roles);
}

export const promptAddRole = async () => {
    const departments = await getAllDepartments();
    const { title, salary, department_id } = await inquirer.prompt([
      { type: 'input', name: 'title', message: 'Role title:' },
      { type: 'input', name: 'salary', message: 'Role salary:' },
      {
        type: 'list',
        name: 'department_id',
        message: 'Select department:',
        choices: departments.map((d) => ({ name: d.name, value: d.id })),
      },
    ]);
    const newRole = await addRole(title, parseFloat(salary), department_id);
    console.log('Role added:', newRole);
}