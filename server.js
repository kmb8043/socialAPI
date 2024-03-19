const express = require('express');
const mongoose = require('mongoose');

const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.json());
server.use(express.urlencoded({ extended: false}));
server.use(require('./routes')); 

const MONGO_CONNECTION_STRING = process.env.MONGODB_URI || 'mongodb://localhost:27017/NOSQL';
mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

server.listen(PORT, () => console.log(`Server is up and running on http://localhost:${PORT}`));