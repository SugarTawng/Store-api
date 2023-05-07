const express = require('express');


router = express.Router();

const {
    getAllTask, getAllProducts
} = require('../controllers/products');

router.route('/test').get(getAllTask)
router.route('/').get(getAllProducts);

module.exports = router;



