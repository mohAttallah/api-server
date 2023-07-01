'use strict';
const express = require("express");
const { schoolCollection } = require('../models/index');
const router = express.Router();

router.get('/school', getSchool);
router.get('/school/:id', getSchool);
router.put('/school/:id', updateSchool);
router.delete('/school/:id', deleteSchool);
router.post('/school', createSchool);

async function getSchool(req, res) {
    const allSchool = await schoolCollection.read();
    res.status(200).json(allSchool);
}

async function getOneSchool(req, res) {
    const oneSchool = await schoolCollection.read(1);
    res.status(200).json(oneSchool);
}

async function createSchool(req, res) {
    const data = req.body;
    const school= await schoolCollection.create(data);
    res.status(201).json(school);
}

async function updateSchool(req, res) {
    const id = req.params.id;
    const data = req.body;
    const school= await schoolCollection.update(id,data);
    res.status(202).json(school);
}
async function deleteSchool(req, res) {
    const id = req.params.id;
    const school= await schoolCollection.delete(id);
    res.status(204).json(school);
}



module.exports = router;