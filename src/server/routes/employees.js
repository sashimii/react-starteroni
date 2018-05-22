import { Employee } from '../model';
import { getValidObject } from '../lib/validate';

export const addEmployee = (req, res) => {
  let validEmployee = getValidObject(req.body);
  validEmployee.isAdmin = false;
  Employee.create(validEmployee)
    .then(() =>
      Employee.findOrCreate({ where: { username } }).then(employee =>
        res.send(employee)
      )
    )
    .catch(function(err) {
      switch (err.name) {
        case 'SequelizeUniqueConstraintError':
          res.send('Sorry, this username is taken.\n');
          return;
        default:
          console.log('ERROR: ', err);
          return;
      }
    });
  console.log('ADDING EMPLOYEE');
};

export const removeEmployee = (req, res) => {
  Employee.destroy({
    where: {
      username: req.params.username
    }
  })
    .then(() => {
      res.send(`Deleted ${req.params.username}`);
    })
    .catch(() => {
      res.status(404).send(`User Not Found`);
    });
  console.log('REMOVING EMPLOYEE');
};

export const updateEmployee = (req, res) => {
  let validUpdatedEmployee = getValidObject(req.body);

  Employee.update(validUpdatedEmployee, {
    where: {
      username: req.params.username
    }
  }).then(() => {
    res.send({ updated: true });
  });
  console.log('UPDATING EMPLOYEE');
};

export const getEmployee = (req, res) => {
  Employee.find({ where: { username: req.params.username } })
    .then(employee => {
      res.send(employee);
    })
    .catch(err => {
      res.status(404).send('Not found');
    });
};

export const getAllEmployees = (req, res) => {
  Employee.findAll({
    order: [['lastName', 'ASC']]
  }).then(employees => {
    res.send(employees);
  });
};
