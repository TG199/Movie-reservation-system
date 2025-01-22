const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(proccess.env.MONGO_URI)
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;