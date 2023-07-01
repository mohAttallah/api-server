'use strict';

const School = (sequlize, DataTypes) => sequlize.define('School', {
    name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  foundedYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  studentCount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

const Student = (sequelize, DataTypes) => sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    age: {
        type:  DataTypes.INTEGER,
        allowNull:false
    },
    schoolId: {
        type:  DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports = {
  School: School,
  Student: Student
};