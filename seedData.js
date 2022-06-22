import mongoose from "./src/services/mongoose";
const bcrypt = require("bcryptjs");
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = Promise;

import users from './src/api/user/model';

const createData = async (req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash("Admin@123", salt);
        const primaryAdmin = {
            "username": "muthu1101",
            "name": "Muthukumar",
            "emailid": "muthukumar.bigapps@gmail.com",
            "usertype": "admin",
            "password": hashpassword,
            "isverify": true
        }

        console.log("Adding admin details..");
        // await users.deleteMany({});
        // await users.create(primaryAdmin);

        console.log("admin data added successfully..");
        console.log("Master Data added successfully..");
        process.exit();
    }
    catch (error) {
        console.log("Seeding data failed");
        process.exit();
    }
}

createData();