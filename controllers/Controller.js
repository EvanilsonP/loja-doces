const Candy = require('../model/CandySchema.js');

const homePage = async (req, res) => {
    try {
        const candies = await Candy.find();
        res.render('index', { candies });
        
    } catch (error) {
        console.log(error);
    }
};

const createCandy = async (req, res) => {
    const { name, description, image, category } = req.body;
    try {
        const candy = await Candy.create({ name, description, image, category });
        return res.status(201).json(candy);
    } 
    catch (error) {
        return res.status(401).json(error);
    }
};

module.exports = { homePage, createCandy };