const Cars = (sequlize, DataTypes) => sequlize.define('cars', {
    brand: {
        type: DataTypes.STRING,
        allowNull : false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});


module.exports =Cars ;