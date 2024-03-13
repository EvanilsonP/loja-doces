const Candy = require('../model/CandySchema.js');
const Category = require('../model/CategorySchema.js');

// Home Page
const homePage = async (req, res) => {
    try { 
        const limitNumber = 5;
        const categories = await Category.find().limit(limitNumber);
        const candies = await Candy.find();
        res.render('index', { candies, categories });
        
    } catch (error) {
        console.log(error);
    }
};

// Create Candy
const createCandy = async (req, res) => {
    const { name, description, image, category } = req.body;
    try {
        const candy = await Candy.create({ name, description, image, category });
        return res.status(201).json(candy);

    } catch (error) {
        return res.status(401).json(error);
    }
};

// Create Category
const createCategory = async (req, res) => {
    const { name, image } = req.body;
    try {
        const category = await Category.create({ name, image });
        return res.status(201).json(category);

    } catch (error) {
        return res.status(401).json(error);
    }
}

// Grab candy by its ID
const candyID = async (req, res) => {
    let candyID = req.params.id;
    try {
        const candyByID = await Candy.findById(candyID);
        return res.status(200).json(candyByID);
        
    } catch (error) {
        return res.status(401).json(error);
    }
};

// Candy Category by its ID
const categoryId = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await Candy.find({ 'category': categoryId})
        res.render('categories', { title: 'Categorias', category });

    } catch (error) {
        return res.status(401).json(error);
    }
};

module.exports = { homePage, createCandy, createCategory, candyID, categoryId};