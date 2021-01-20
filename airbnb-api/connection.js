var mysql = require('mysql2');
var hostname = "localhost";
var username = "root";
var password = "";
var database = "airbnb";

var connection = mysql.createConnection({
	host: hostname,
	user: username,
	password: password,
	database : database,	
});

connection.connect(function(error) {
	if (error) throw error;
});

module.exports = {
	simple: connection
};