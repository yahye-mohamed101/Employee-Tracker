import inquirer from 'inquirer';
import { getAllEmployees, addEmployee, updateEmployeeRole } from '../db_function/employee.js';
import { getAllRoles } from '../db_function/role.js';
//Display employees
export const displayEmployees = async () => {
    const employees = await getAllEmployees();
    console.table(employees);
};
//Add an employee with a prompt
export const promptAddEmployee = async () => {
    const roles = await getAllRoles();
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'First-Name:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Last-Name:'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Select new role:',
            choices: roles.map((r) => ({ name: r.title, value: r.id }))
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter your manager Id (leave blank if none):',
            filter: (input) => input === '' ? null : parseInt(input, 10) // Convert empty input to null
        }
    ]);
    const newEmployee = await addEmployee(first_name, last_name, role_id, manager_id);
    console.log('Employee added:', newEmployee);
};
//Update an employee's role
export const promptUpdateEmployeeRole = async () => {
    const employees = await getAllEmployees();
    const roles = await getAllRoles();
    const { employee_id, role_id } = await inquirer.prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Select employee:',
            choices: employees.map((e) => ({ name: `${e.first_name} ${e.last_name}`, value: e.id })),
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Select new role:',
            choices: roles.map((r) => ({ name: r.title, value: r.id })),
        },
    ]);
    await updateEmployeeRole(employee_id, role_id);
    console.log('Employee role updated.');
};
