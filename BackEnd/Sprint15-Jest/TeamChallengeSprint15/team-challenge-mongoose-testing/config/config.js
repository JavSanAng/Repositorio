const mongoose = require ('mongoose');
require ('dotenv').config();

const dbConnection = async()=>{
    try {
        console.log(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Conection with database done');
    } catch (error) {
        console.error('Error with the conection of the database');
        throw new Error ('Error initializing the database');
    }
};

module.exports = {
    dbConnection,
};