const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.database_url);
        console.log("Database connected")

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;
