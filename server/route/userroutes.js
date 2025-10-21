const express= require('express');
const router= new express.Router();
const authcontroller =require('../controller/authcontroller');
const authmiddleware = require('../middleware/authmiddleware');
const upload = require('../helper/multer');
const validatemiddleware = require('../middleware/validatemiddleware');
const userSchema = require('../helper/validate');


//router.post('/register',validatemiddleware(userSchema), authcontroller.register );
router.post('/login',validatemiddleware(userSchema), authcontroller.login );
router.post('/logout',authmiddleware, authcontroller.logout );

router.get('/my-profile',authmiddleware, authcontroller.myProfile );
router.put('/update-profile',authmiddleware, upload.single('profile'), authcontroller.updateProfile );



module.exports=router;