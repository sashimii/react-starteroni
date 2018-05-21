import express from 'express';
import {
  getEmployee,
  getAllEmployees,
  postEmployee,
  addEmployee
} from './employees';
import sequelize from '../model';

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const apiRouter = express.Router();

apiRouter.get('/employee', getAllEmployees);
apiRouter.post('/employee', addEmployee);

export default apiRouter;

// curl -d '{"username": "stailor", "firstName":"Sushil", "lastName": "Tailor"}' -H "Content-Type: application/json" http://127.0.0.1:3000/api/employee
