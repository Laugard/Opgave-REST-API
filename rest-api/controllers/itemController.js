const itemModel = require('../models/itemModel');

// Hent alle items
exports.getAllItems = (req, res) => {
    res.json(itemModel.getAllItems());
};

// Hent et item baseret på ID
exports.getItemById = (req, res) => {
    const item = itemModel.getItemById(parseInt(req.params.id));
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

// Opret et nyt item
exports.createItem = (req, res) => {
    const newItem = itemModel.createItem(req.body);
    res.status(201).json(newItem);
};

// Opdater et eksisterende item baseret på ID
exports.updateItem = (req, res) => {
    const updatedItem = itemModel.updateItem(parseInt(req.params.id), req.body);
    if (updatedItem) {
        res.json(updatedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

// Slet et item baseret på ID
exports.deleteItem = (req, res) => {
    const deletedItem = itemModel.deleteItem(parseInt(req.params.id));
    if (deletedItem) {
        res.json(deletedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};
