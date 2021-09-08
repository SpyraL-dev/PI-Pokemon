const { Router } = require('express');

const controlerType = require('./class/type')
const router = Router();

router.get('/',controlerType.saveType)


module.exports = router