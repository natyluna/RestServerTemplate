const {Router} = require('express');
const { getUsers, putUsers, postUsers, deleteUsers } = require('../controller/users');

router = Router();

router.get('/',getUsers);
router.post('/',postUsers);
router.put('/',putUsers);
router.delete('/',deleteUsers);










module.exports=router;