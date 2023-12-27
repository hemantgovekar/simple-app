const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

mongoose.connect(process.env.MONDB_CONNECTION_STRING);


const AdminScheme = new mongoose.Schema({
    username: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    }
})

const Admin = mongoose.model("Admin", AdminScheme);
module.exports = { Admin }
