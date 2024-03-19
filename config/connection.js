const mongoose =  require ('mongoose');

mongoose.connect = ('monodb://127.0.0.1:27017/NOSQL');

module.exports = mongoose.connection;