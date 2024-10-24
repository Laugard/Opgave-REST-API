const express = require('express');
const router = express.Router();

// Data array som eksempel
let products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 }
];

// READ - Hent alle produkter
router.get('/', (req, res) => {
    res.json(products);
});

// CREATE - Tilføj et nyt produkt
router.post('/', (req, res) => {
    const newProduct = { id: products.length + 1, name: req.body.name, price: req.body.price };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// UPDATE - Opdater et produkt
router.put('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        product.name = req.body.name;
        product.price = req.body.price;
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

// DELETE - Slet et produkt
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
});

module.exports = router;
