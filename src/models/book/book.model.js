const Author = (sequelize, DataTypes) => sequelize.define('author', {
    name: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER, 
    allowNull: false
  },
  bio: {
    type: DataTypes.STRING,
    allowNull:  false
    }
  
});

const Book = (sequelize, DataTypes) => sequelize.define('book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicationYear: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
});

// Create a new author record


module.exports = {
    Book: Book,
    Author: Author,
};