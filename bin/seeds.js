// Iteration #1
require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
//console.log(data)
const Drone = require("../models/Drone.model")


const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

async function seedDb(){
    try {
        const self = await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        self.connection.dropDatabase();
        const drones = await Drone.create(data);
        console.log(drones);

        mongoose.connection.close();
    }catch(err){
        console.error(err);
    }
}

seedDb();