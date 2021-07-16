const {response} = require('express');

const getUsers = (req,res = response)=>{
    res.json({
        msg:'api get'
    });

}

const postUsers = (req,res = response)=>{
   
    res.json({
        msg:'api post'
    });

}

const putUsers = (req,res = response)=>{
    res.json({
        msg:'api put'
    });

}

const deleteUsers = (req,res = response)=>{
    res.json({
        msg:'api delete'
    });

}



module.exports={
    getUsers,
    deleteUsers,
    postUsers,
    putUsers
};