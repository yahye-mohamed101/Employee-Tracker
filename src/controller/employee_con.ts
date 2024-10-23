import inquirer from "inquirer";
import { Employee, getAllEmployees, addEmployee, updateEmployeeRole } from '../db_function/employee';
import { getAllRoles } from '../db_function/role';

//Display employees
const displayEmployees = async (): Promise<void> => {
    const employees: [] = await getAllEmployees();
    console.table(employees);
};

//Add an employee with a prompt
const addEmployeePrompt = async (): Promise<void> => {
    const roles = await getAllRoles();
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
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
};

//Update an employee's role
const updateEmployeeRole = async (): Promise<void> => {
    const employees = getAllEmployees();
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
    console.log('Employee role updated.')
};

