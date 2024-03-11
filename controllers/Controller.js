const Candy = require('../model/CandySchema.js');
const Category = require('../model/CategorySchema.js');


const homePage = async (req, res) => {
    try {
        const categories = await Category.find();
        const candies = await Candy.find();
        res.render('index', { candies, categories });
        
    } catch (error) {
        console.log(error);
    }
};

const createCandy = async (req, res) => {
    const { name, description, image, category } = req.body;
    try {
        const candy = await Candy.create({ name, description, image, category });
        return res.status(201).json(candy);

    } catch (error) {
        return res.status(401).json(error);
    }
};

const createCategory = async (req, res) => {
    const { name, image } = req.body;
    try {
        const category = await Category.create({ name, image });
        return res.status(201).json(category);

    } catch (error) {
        return res.status(401).json(error);
    }
}

module.exports = { homePage, createCandy, createCategory };