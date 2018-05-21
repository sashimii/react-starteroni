import { Employee } from '../model';

const ifExists = resBodyItem => {
  return typeof resBodyItem !== 'undefined';
};

const assignIfExists = resBodyItem => {
  return ifExists(resBodyItem) ? resBodyItem : null;
};

export const addEmployee = (req, res) => {
  const lastName = assignIfExists(req.body.lastName);
  const firstName = assignIfExists(req.body.firstName);
  const username = assignIfExists(req.body.username);
  const isAdmin = false;
  Employee.create({
    username,
    firstName,
    lastName,
    isAdmin
  })
    .then(() =>
      Employee.findOrCreate({ where: { username } }).then(employee =>
        res.send(employee)
      )
    )
    .catch(function(err) {
      switch (err.name) {
        case 'SequelizeUniqueConstraintError':
          res.send('Sorry, this username is taken.');
          return;
        default:
          console.log('ERROR: ', err);
          return;
      }
    });
  console.log('ADDING EMPLOYEE');
};

export const removeEmployee = (req, res) => {
  console.log('REMOVING EMPLOYEE');
};

export const updateEmployee = (req, res) => {
  console.log('UPDATING EMPLOYEE');
};

export const postEmployee = (req, res) => {
  console.log(req.body);
};

export const getEmployee = (req, res) => {
  res.send({ id: 'LOLOLOL', name: 'Bob Smith' });
};

export const getAllEmployees = (req, res) => {
  Employee.findAll({
    order: [['lastName', 'ASC']]
  }).then(employees => {
    res.send(employees);
  });
};
