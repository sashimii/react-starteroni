import express from 'express';
import {
  getEmployee,
  getAllEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee
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

/* EMPLOYEE ROUTES */
// GET
apiRouter.get('/employee', getAllEmployees);
apiRouter.get('/employee/:username', getEmployee);

// POSTS
apiRouter.post('/employee', addEmployee);

// UPDATES
apiRouter.put('/employee/:username', updateEmployee);

// DELETES
apiRouter.delete('/employee/:username', removeEmployee);



/* REVIEW ROUTES */
// GET
apiRouter.get('/reviews/:username', getAllReviews);
apiRouter.get('/reviews/:username/:reviewId', getReview);

// POSTS
apiRouter.post('/reviews/:username', addReview);

// UPDATES
apiRouter.post('/reviews/:username', editReview);

// DELETES

/* ASSIGNMENT ROUTE */
// POSTS
apiRouter.post('/assign/', assignReview);



export default apiRouter;
