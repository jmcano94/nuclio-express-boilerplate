const mongoose = require('mongoose');
require('dotenv').config();
const databaseHost = process.env.DATABASE_HOST || 'localhost';
const databasePort = process.env.DATABASE_PORT || '27030';
const databaseName = process.env.DATABASE_NAME || 'app';
const databaseUser = process.env.DATABASE_USER || 'root';
const databasePassword = process.env.DATABASE_PASSWORD || 'meow';
const databaseURL = process.env.DATABASE_URL;

let db;

const saveDB = (err, database) => {
	db = database;
}

if(databaseURL){
	mongoose.connect(databaseURL, {useNewUrlParser: true}, saveDB);
}else{
	if(databaseUser && databasePassword) {
		mongoose.connect(`mongodb://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}?authSource=admin`, {useNewUrlParser: true, useUnifiedTopology: true}, saveDB);
	}else {
		mongoose.connect(`mongodb://${databaseHost}:${databasePort}/${databaseName}?authSource=admin`, {useNewUrlParser: true, useUnifiedTopology: true}, saveDB);
	}
}

const getConnection = () => {
	return db;
};

module.exports = {
	db,
}
