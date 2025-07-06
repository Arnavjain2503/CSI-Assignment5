const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// CREATE
router.post('/', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).send(item);
  } catch (err) {
    console.error('Error creating item:', err.message);
    res.status(400).send(err.message); 
  }
});

// READ all
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// READ by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.send(item);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).send('Item not found');
    res.send(item);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.send({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
