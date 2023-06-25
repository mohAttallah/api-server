'use strict';
const express = require("express");
const { Cars } = require('../models/index');
const { where } = require("sequelize");

const router = express.Router();


router.get('/cars', getCars);
router.get('/cars/:id', getCar);
router.put("/cars/:id", updateCar);
router.delete("/cars/:id", deleteCar);
router.post("/cars", createCar);


async function createCar(req, res) {
  try {
    const obj = {
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
    };
    const car = await  Cars.create(obj);
    res.status(201).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the car.' });
  }
}

async function getCars(req, res) {
    const allCars = await  Cars.findAll();
    res.status(200).json(allCars);
}


async function getCar(req, res) {
    const id = req.params.id;
    const car = await  Cars.findOne({ where: { id: id } });
    if (car === null) {
        res.status(200).json("not found !");
    } else {
        res.status(200).json(car);
    }
}

async function updateCar(req, res) {
  try {
    const carId = req.params.id;
    const updatedData = {
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
    };

    const car = await Cars.findByPk(carId);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    Object.assign(car, updatedData); // Update the car object with the new data
    await car.save(); // Save the changes

    res.status(202).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the car.' });
  }
}

async function deleteCar(req, res) {
  try {
    const carId = req.params.id;

    const deletedCar = await Cars.destroy({
      where: { id: carId },
      returning: true
    });

    if (deletedCar === 0) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(204).json("deleted");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the car.' });
  }
}
module.exports = router;