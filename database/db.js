const mongoose = require('mongoose');

const connectDB = async(req, res) =>{
    try {
        mongoose.set('strictQuery', false);
        const conn = mongoose.connect(process.env.URI);
        console.log(`Database connected.`);
    } 
    catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;