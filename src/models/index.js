'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const Collection = require('./collection.js')

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
console.log("DATABASE_URL:", DATABASE_URL );

// if you have a production or not have 
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
} :{}

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const { Book } = require('./book/book.model.js');
const { Author } = require('./book/book.model.js');

const { School } = require('./school/school.model.js');
const { Student } = require('./school/school.model.js');

const bookModel =  Book(sequelize, DataTypes);
const authorModel = Author(sequelize, DataTypes);

const studentModel = Student(sequelize, DataTypes);
const schoolModel =  School(sequelize, DataTypes);

// relationship
//book

authorModel.hasMany(bookModel, { foreignKey: 'authorId', sourceKey: 'id' });
bookModel.belongsTo(authorModel, { foreignKey: 'authorId',  targetKey: 'id' })

// school

schoolModel.hasMany(studentModel, { foreignKey: 'schoolId', sourceKey: 'id' });
studentModel.belongsTo(schoolModel, { foreignKey: 'schoolId',  targetKey: 'id' })


const authorCollection= new Collection(authorModel);
const bookCollection = new Collection(bookModel);

const schoolCollection= new Collection(schoolModel);
const studentCollection = new Collection(studentModel);



module.exports = {
  db: sequelize,
  Book: Book(sequelize, DataTypes),
  Author : Author(sequelize, DataTypes),
  authorCollection,
  bookCollection,
  schoolCollection,
  studentCollection
} 

