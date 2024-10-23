import inquirer from "inquirer";
import { Employee, getAllEmployees, addEmployee, updateEmployeeRole } from '../db_function/employee';
import {getAllRoles} from '../db_function/role';

//Display employees
const displayEmployees = async (): Promise<void> => {
    const employees: [] = await getAllEmployees();
    console.table(employees);
};

//Add an employee with a prompt
const addEmployeePrompt = async (): Promise<void> => {
    const roles = await getAllRoles();
    const {first_name, last_name, role_id, manager_id} = await inquirer.prompt([
        { type: 'input', name: 'first_name', message: 'First name:' },
    { type: 'input', name: 'last_name', message: 'Last name:' },
    {
      type: 'list',
      name: 'role_id',
      message: 'Select role:',
      choices: roles.map((r) => ({ name: r.title, value: r.id })),
    },
    { type: 'input', name: 'manager_id', message: 'Manager ID (leave blank if none):', default: null },
  ]);
    
  const newEmployee: Employee = await addEmployee(first_name, last_name, role_id, manager_id || null); 
  console.log(`Employee added:`, newEmployee);
}

