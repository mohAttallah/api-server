const School = (sequlize, DataTypes) => sequlize.define('school', {
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

module.exports = School;