const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const { getUsers, putUsers, postUsers, deleteUsers } = require('../controller/users');
const { esRolValido, esEmailValido, existeUserPorID } = require('../helpers/db-validator');

router = Router();

router.get('/',getUsers);

router.post('/',[
    check('name','El name es obligatorio').not().isEmpty(),
    check('pass','El pass debe contener mas de 3 caracteres').isLength({min:5}),
/*     check('rol','El rol no es valido').isIn(["ADMIN_ROLE", "USER_ROLE"]),*/ 
    check('rol').custom(esRolValido),
    check('email','Email no valido').isEmail(),    
    check('email').custom(esEmailValido),
    validarCampos
],postUsers);

router.put('/:id',[
    check('id','el id no es valido').isMongoId(),
    check('id').custom(existeUserPorID),
    validarCampos
],putUsers);

router.delete('/:id',[
    check('id','el id no es valido').isMongoId(),
    check('id').custom(existeUserPorID),
    validarCampos
],deleteUsers);










module.exports=router;