import Sequelize from 'sequelize';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

pg.defaults.ssl = true;

const sequelize = new Sequelize(
  process.env.POSTGRES_URL,
  // `postgres://mozhiyfnlzintb:4b78ca399216c818f2e2845d8a1378ae43f89a03b3bb79369d38e725b63dd5f6@ec2-23-21-129-50.compute-1.amazonaws.com:5432/dck0l83stprqb5`,
  {
    dialect: 'postgres'
  }
);

export const Employee = sequelize.define('employee', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  isAdmin: {
    type: Sequelize.BOOLEAN
  }
});

Employee.sync({ alter: true });

export default sequelize;
