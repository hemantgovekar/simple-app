const { Router } = require('express');
const router = Router();
const { Admin } = require('../db')

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const createAdmin = await Admin.create({ username, password });
        res.status(200).json({ msg: "user created successfully " + createAdmin });
    } catch (error) {

        res.status(500).json({ msg: "Error while creating admin" })
    }
});

router.get('/', async (req, res) => {
    const getAdmin = await Admin.find({});
    res.status(200).json({ "msg": "Admin found " + getAdmin })
})

module.exports = router;
