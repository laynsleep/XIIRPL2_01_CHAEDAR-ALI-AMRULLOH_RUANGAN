const express = require('express');
const router = express.Router();

const roomController = require('../controllers/Room')

router.get('/rooms', roomController.index);

router.get('/room/:id', roomController.show);

router.post('/room', roomController.store);

router.put('/room/:id', roomController.update);

router.delete('/room/:id', roomController.delete);

module.exports = router;