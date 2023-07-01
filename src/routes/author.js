'use strict';
const express = require("express");
const router = express.Router();
const { authorCollection } = require('../models/index');

router.get('/author', getAuthor);
router.get('/author/:id', getOneAuthor);
router.put('/author/:id', updateAuthor);
router.delete('/author/:id', deleteAuthor);
router.post('/author', createAuthor);
// router.get('/customerorders/:id', customerauthor);


async function getAuthor(req, res) {
    const allauthor = await authorCollection.read();
    res.status(200).json(allauthor);
}

async function getOneAuthor(req, res) {
    const oneauthor = await authorCollection.read(1);
    res.status(200).json(oneauthor);
}

async function createAuthor(req, res) {
    const data = req.body;
    const author= await authorCollection.create(data);
    res.status(201).json(author);
}

async function updateAuthor(req, res) {
    const id = req.params.id;
    const data = req.body;
    const author= await authorCollection.update(id,data);
    res.status(202).json(author);
}
async function deleteAuthor(req, res) {
    const id = req.params.id;
    const author= await authorCollection.delete(id);
    res.status(204).json(author);
}

module.exports = router;