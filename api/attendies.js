const express = require('express');

const Attender = require('../models/attender');

const router = express.Router();

router.post('/', async (req, res) => {
    const {name, phone, status, attendies, recognized} = req.body;
    if (!name || !phone || !status) {
        res.status(500);
    };
    try {
        const attendy = await new Attender({
            name, 
            phone,
            status,
            attendies,
            recognized,
        });
        await attendy.save();
    } catch (err) {
        res.status(400).json(err);
    }
    res.status(200).send('added successfully');
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const attendy = await Attender.findById(id);
        if (attendy) {
            res.status(200).send(attendy.name);
        }
    } catch (err) {
        res.status(401).send('Unrecognized');
    }
});

module.exports = router;