'use strict';
const express = require("express");
const { School } = require('../models/index');

const router = express.Router();

router.get('/schools', getSchools);
router.get('/schools/:id', getSchool);
router.put('/schools/:id', updateSchool);
router.delete('/schools/:id', deleteSchool);
router.post('/schools', createSchool);

async function createSchool(req, res) {
  try {
    const obj = {
      name: req.body.name,
      foundedYear: req.body.foundedYear,
      studentCount: req.body.studentCount
    };
    const school = await School.create(obj);
    res.status(201).json(school);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the school.' });
  }
}

async function getSchools(req, res) {
  try {
    const allSchools = await School.findAll();
    res.status(200).json(allSchools);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the schools.' });
  }
}

async function getSchool(req, res) {
  try {
    const id = req.params.id;
    const school = await School.findOne({ where: { id: id } });
    if (school === null) {
      res.status(404).json({ message: 'School not found' });
    } else {
      res.status(200).json(school);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the school.' });
  }
}

async function updateSchool(req, res){
  try {
    const schoolId = req.params.id;
    const updatedData = {
      name: req.body.name,
      foundedYear: req.body.foundedYear,
      studentCount: req.body.studentCount
    };

    const school = await School.findByPk(schoolId);

    if (!school ) {
      return res.status(404).json({ message: 'Car not found' });
    }
    Object.assign(school , updatedData); // Update the car object with the new data
    await school.save(); // Save the changes
    res.status(202).json(school);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the school.' });
  }
}



async function deleteSchool(req, res) {
  try {
    const schoolId = req.params.id;

    const deletedSchool = await School.destroy({
      where: { id: schoolId },
      returning: true
    });

    if (deletedSchool === 0) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.status(204).json(deletedSchool);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the school.' });
  }
}


module.exports = router;
