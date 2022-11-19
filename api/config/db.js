const { default: mongoose } = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = dbConnection;
