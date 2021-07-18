const {Schema,model} = require('mongoose');

const roleSchema= new Schema({
    rol:{
        type:String,
        required:[true,'Rol Obligatorio'],
        unique:true
    }
});

module.exports= model('rol',roleSchema);