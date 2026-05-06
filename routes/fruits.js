// Contains the routing for fruit endpoint requests (Middleware between request and response)
const express = require("express");
const router = express.Router();
const fruitsController = require("../controllers/fruits");

router.get('/', fruitsController.index)
router.get('/:name', fruitsController.name)
router.post('/', fruitsController.create)
router.patch('/:name', fruitsController.update)
router.delete('/:name', fruitsController.destroy)

module.exports = router