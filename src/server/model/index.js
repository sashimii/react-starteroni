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
  userId: {
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

export const Review = sequelize.define('review', {
  reviewId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  rating: {
    type: Sequelize.ENUM('Inadequate', 'Satisfactory', 'Excellent')
  },
  content: {
    type: Sequelize.TEXT
  }
});

export const Assignment = sequelize.define('assignment', {
  assignmentId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  type: {
    type: Sequelize.ENUM('Review')
  }
});

// An Assignment can belong to many employees 1:M
Assignment.belongsToMany(Employee, { through: 'EmployeeAssignments' });

// An Employee can belong to many assignments 1:M
Employee.belongsToMany(Assignment, { through: 'EmployeeAssignments' });

// An employee can have many reviews  1:M
Employee.hasMany(Review, { as: 'EmployeeReviews' });

// A review can only belong to a single employee 1:1
Review.belongsTo(Employee);

Employee.sync();
Review.sync();
Assignment.sync();

export default sequelize;
