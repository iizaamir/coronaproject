const express = require('express');
var controller = require('./../controller/control.js');
const router =express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
//     });


router.route('/createShop').post(controller.createShops);
router.route('/viewShop').get(controller.viewShops);
// router.route('/deleteShop/:id').delete(controller.deleteShops);
// router.route('/updateShop/:id').patch(controller.updateShops);

module.exports = router;