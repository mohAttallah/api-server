'use strict';
const express = require("express");
const { studentCollection } = require('../models/index');
const router = express.Router();

router.get('/student', getStudent);
router.get('/student/:id', getStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);
router.post('/student', createStudent);

async function getStudent(req, res) {
    const allStudent = await studentCollection.read();
    res.status(200).json(allStudent);
}

async function getOneStudent(req, res) {
    const oneStudent = await studentCollection.read(1);
    res.status(200).json(oneStudent);
}

async function createStudent(req, res) {
    const data = req.body;
    const student= await studentCollection.create(data);
    res.status(201).json(student);
}

async function updateStudent(req, res) {
    const id = req.params.id;
    const data = req.body;
    const student= await studentCollection.update(id,data);
    res.status(202).json(student);
}
async function deleteStudent(req, res) {
    const id = req.params.id;
    const student= await studentCollection.delete(id);
    res.status(204).json(student);
}



module.exports = router;