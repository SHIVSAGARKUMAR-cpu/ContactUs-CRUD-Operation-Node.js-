const Controller = require('../Controller/Controller');

const Express = require('express');

const router = Express.Router();

router.get('/getuser', Controller.GetUsers);
router.post('/saveuser',Controller.SaveUser);
router.get('/deluser/:id',Controller.DelUser);


module.exports = router;