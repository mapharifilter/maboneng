const {Client} = require("pg");


const DB_URL = 'postgres://eikgmzucocrick:23821ead68f410a6c8d52a865d0d88a44be8afd78088307f599d1dc628e74835@ec2-52-71-23-11.compute-1.amazonaws.com:5432/d14t7os7igeq7g'

const client= new Client({ connectionString:DB_URL, ssl:{rejectUnauthorized:false} })




module.exports = client ;
