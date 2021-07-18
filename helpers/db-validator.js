const Role = require('../models/role');
const User = require('../models/user');


const esRolValido = async(rol = '')=>{
    
    const existRol = await Role.findOne({rol});
   
    if(!existRol){
        throw new Error('Rol no Valido');
    }
};

const esEmailValido = async(email = '')=>{
    const existEmail = await User.findOne({email});

    if(existEmail){
       throw new Error('El email ya existe');
    }
}

const existeUserPorID = async(id = '')=>{
    const existUser = await User.findOne({_id: id});
    if(!existUser){
       throw new Error('El user no  existe');
    }
}

module.exports = {
    esRolValido,
    esEmailValido,
    existeUserPorID
}