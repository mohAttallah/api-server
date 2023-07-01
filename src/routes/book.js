'use strict';
const express = require("express");
// const { book } = require('../models/index');
const router = express.Router();
const { bookCollection } = require('../models/index');

router.get('/book', getBook);
router.get('/book/:id', getOneBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);
router.post('/book', createBook);
// router.get('/customerorders/:id', customerBook);


async function getBook(req, res) {
    const allBook = await bookCollection.read();
    res.status(200).json(allBook);
}

async function getOneBook(req, res) {
    const oneBook = await bookCollection.read(1);
    res.status(200).json(oneBook);
}

async function createBook(req, res) {
    const data = req.body;
    const book= await bookCollection.create(data);
    res.status(201).json(book);
}

async function updateBook(req, res) {
    const id = req.params.id;
    const data = req.body;
    const book= await bookCollection.update(id,data);
    res.status(202).json(book);
}
async function deleteBook(req, res) {
    const id = req.params.id;
    const book= await bookCollection.delete(id);
    res.status(204).json(book);
}



module.exports = router;