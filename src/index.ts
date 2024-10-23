import inquirer from 'inquirer';
import { promptDisplayDepartment, promptAddNewDepartment } from './controller/department_con.js'
import { promptDisplayRole, promptAddRole } from './controller/role_con.js';
import { displayEmployees, promptAddEmployee, promptUpdateEmployeeRole } from './controller/employee_con.js';
import { connectToDb } from './connection.js';

// Main menu
const mainMenu = async (): Promise<void> => {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Exit',
    ],
  });

  switch (action) {
    case 'View All Departments':
      await promptDisplayDepartment();
      break;
    case 'View All Roles':
      await promptDisplayRole();
      break;
    case 'View All Employees':
      await displayEmployees();
      break;
    case 'Add Department':
      await promptAddNewDepartment();
      break;
    case 'Add Role':
      await promptAddRole();
      break;
    case 'Add Employee':
      await promptAddEmployee();
      break;
    case 'Update Employee Role':
      await promptUpdateEmployeeRole();
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();
  }

  // Loop back to the main menu
  await mainMenu();
};

// Start the application
const startApp = async () => {
  await connectToDb();
  await mainMenu();
}


startApp();