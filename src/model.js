const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const userTable = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    father: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    blood: {
        type: String
    },
    phone: {
        type: Number
    },
    alternate_phone: {
        type: Number
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    pincode: {
        type: Number
    },
    email: {
        type: String
    },
    timestamp: {
        type: String
    }
});

userTable.methods = {
    view(full) {
        const view = {
            id: this.id,
            name: this.name,
            password: this.password,
            father: this.father,
            age: this.age,
            gender: this.gender,
            blood: this.blood,
            phone: this.phone,
            alternate_phone: this.alternate_phone,
            address: this.address,
            city: this.city,
            pincode: this.pincode,
            email: this.email,
            timestamp: this.timestamp
        }
        return view;
    }
}

const model = mongoose.model('User', userTable)

module.exports = model;