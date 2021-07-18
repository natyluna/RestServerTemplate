const mongoose = require('mongoose');

const dbConnection = async() =>{
    try {
       
        await  mongoose.connect(process.env.MONGODB_CNN,{
            useCreateIndex:true,
            useFindAndModify:false,
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw Error('Error al conectar la base de datos.')
    }
 
};

module.exports={
    dbConnection
};