const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const ConnectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${Connection.host}`);
    }catch(error){
        console.log(error);
    }
    
    }

    module.exports = ConnectDB;