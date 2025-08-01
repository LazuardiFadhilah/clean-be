const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(MONGO_URI, {
    dbName:DB_NAME,
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

).catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with failure
}
);